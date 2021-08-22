import React , {Component}from 'react';
import {Link} from "react-router-dom";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state= {
      registerName: '',
      registerEmail: '',
      registerPassword: '',
    }
  };

  onNameChange = (event) => {
    this.setState({registerName: event.target.value});
  };

  onEmailChange = (event) => {
    this.setState({registerEmail: event.target.value});
  };

  onPasswordChange = (event) => {
    this.setState({registerPassword: event.target.value});
  };

  onRegister = (event) => {
    if (!this.state.registerPassword || !this.state.registerName || !(this.state.registerEmail.includes('@'))) {
      alert('Please fill out form.')
    } else {
      fetch('https://whispering-forest-93215.herokuapp.com/register', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          email: this.state.registerEmail,
          name: this.state.registerName,
          password: this.state.registerPassword
        })
      })
      .then(response => response.json())
      .then(user => {
        if (user.name) {
          this.props.onLoadUser(user);
        }
        else {
          alert(user);
        }

      })
      .catch(err => alert("Error registering."))
    }
  };

  render() {
    return (
      <div>
        <article className="br2 dark-gray shadow-5 b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
          <main className="pa4 black-80 center">
            <div className="measure">
              <fieldset id="sign_up" className=" b--transparent ph0 mh0">
                <legend className="f4 fw6 ph0 mh0">Register</legend>
                <div className="mt3">
                  <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                  <input className="b pa2 input-reset  bg-transparent hover-bg-black hover-white w-100"
                   type="text" 
                   name="name"  
                   id="name"
                   onChange={this.onNameChange}/>
                </div>
                <div className="mv3">
                  <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                  <input className="pa2 input-reset  bg-transparent hover-bg-black hover-white w-100" 
                  type="email" 
                  name="email-address"  
                  id="email-address"
                  onChange={this.onEmailChange}/>
                </div>
                <div className="mv3">
                  <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                  <input className="b pa2 input-reset  bg-transparent hover-bg-black hover-white w-100" 
                  type="password" 
                  name="password"  
                  id="password"
                  onChange={this.onPasswordChange}/>
                </div>
              </fieldset>
              <div className="b ph3 pv2 input-reset center b--black bg-transparent grow pointer f6 dib">
                <Link to="/register" onClick={this.onRegister}>Register</Link>
              </div>
              <div className="lh-copy mt3 center">
                <Link to="/" className="f6 center link dim black db pointer">Sign in</Link>
              </div>
            </div>
          </main>
        </article>
      </div>
    );
  }

};

export default Register;