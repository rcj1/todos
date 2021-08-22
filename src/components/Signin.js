import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state= {
      signInEmail: '',
      signInPassword: ''
    };
  }
  
  onEmailChange = (event) => {
    this.setState({signInEmail: event.target.value});
  };

  onPasswordChange = (event) => {
    this.setState({signInPassword: event.target.value});
  };

  onSignin = (event) => {
    if (!this.state.signInPassword || !(this.state.signInEmail.includes('@'))) {
      alert('Please fill out form.')
    } else {
      fetch('https://whispering-forest-93215.herokuapp.com/signin', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          email: this.state.signInEmail,
          password: this.state.signInPassword
        })
      })
      .then(response => response.json())
      .then(data => {
        if (data.name) {
          this.props.onLoadUser(data);
        }
        else {
          alert(data);
        }
      })
      .catch(err => alert("Error registering."))
    }
}

  render() {
    return (
      <div>
        <article className="br2 shadow-5 dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
          <main className="pa4 black-80 center">
            <div className="measure">
              <fieldset id="sign_up" className="b--transparent ph0 mh0">
                <legend className="f4 fw6 ph0 mh0">Sign In</legend>
                <div className="mt3">
                  <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                  <input className="pa2 input-reset bg-transparent hover-bg-black hover-white w-100" 
                  type="email" 
                  name="email-address"  
                  id="email-address"
                  onChange={this.onEmailChange}/>
                </div>
                <div className="mv3">
                  <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                  <input className="b pa2 input-reset bg-transparent hover-bg-black hover-white w-100" 
                  type="password" 
                  name="password"  
                  id="password"
                  onChange={this.onPasswordChange}/>
                </div>
              </fieldset>
              <div className="b ph3 pv2 input-reset center b--black bg-transparent grow pointer f6 dib">
                <Link to="/" onClick={this.onSignin}>Sign In</Link>
              </div>
              <div className="lh-copy mt3 center">
                <Link to="/register" className="f6 center link dim black db pointer">Register</Link>
              </div>
            </div>
          </main>
        </article>
      </div>
    );
  }
}

export default Signin;