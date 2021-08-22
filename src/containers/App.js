import React, {Component} from 'react';
import { Switch, Route, Redirect} from 'react-router-dom';
import Signout from '../components/Signout';
import Signin from '../components/Signin';
import Register from '../components/Register';
import Header from '../components/Header';
import InputField from '../components/InputField';
import Chores from '../components/Chores';
const initialState = 
{
  signedin: false,
  content: '',
  date: '',
  user: {
    name: '',
    email: '',
    todos: 
    []
  }
};

class App extends Component {
  constructor() {
    super();
    this.state= initialState;
  };

  onSignout = () => {
    this.setState(initialState);
  };

  onLoadUser = (data) => {
    this.setState({user: {
      name: data.name,
      email: data.email,
      todos: data.todos ? data.todos : []
    },
    signedin: true})
  };

  onContentChange = (event) => {
    this.setState({content: event.target.value});
  };

  onDateChange = (event) => {
    this.setState({date: event.target.value});
  };

  updateTodoState = (data) => {
    if (Array.isArray(data)) {
      this.setState({user: {
        email: this.state.user.email,
        name: this.state.user.name,
        todos: data}})
    }
    else {
      alert(data);
    }
  };

  onAddTask = () => {
    var date = new Date(this.state.date);
    date.setDate(date.getDate() + 1);
    fetch('https://whispering-forest-93215.herokuapp.com/updatedb', {
      method: 'put',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.user.email,
        task: this.state.content,
        date: this.state.date
      })
    })
    .then(response => response.json())
    .then(data => this.updateTodoState(data))
    .catch(err => alert("Error adding task"))
  };

  onDone = (time, content) => {
    fetch('https://whispering-forest-93215.herokuapp.com/deletefromdb', {
      method: 'put',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.user.email,
        task: content,
        date: time
      })
    })
    .then(response => response.json())
    .then(data => this.updateTodoState(data))
    .catch(err => alert("Error deleting task"))
  };


  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/">
            {this.state.signedin ? <Redirect to="/signedin"/> : <Signin onLoadUser={this.onLoadUser}/>}
          </Route>
          <Route path="/register">
            {this.state.signedin ? <Redirect to="/signedin"/> : <Register onLoadUser={this.onLoadUser}/>}
          </Route>
          <Route path="/signedin">
            <div>
              <Signout onSignout={this.onSignout}/>
              <Header name={this.state.user.name} number={this.state.user.todos.length}/>
              <InputField onContentChange={this.onContentChange}
              onDateChange={this.onDateChange}
              onAddTask={this.onAddTask}/>
              <Chores choreList={this.state.user.todos} onDone={this.onDone}/>
            </div>
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;

