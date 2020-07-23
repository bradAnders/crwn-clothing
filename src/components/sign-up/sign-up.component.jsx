import React, { Component } from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './sign-up.styles.scss';

class SignUp extends Component {
  constructor(props) {
    super(props)

    this.initState = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }

    this.state = this.initState
  }

  handleSubmit = async e => {
    e.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);

      await createUserProfileDocument(user, { displayName });

      this.setState(this.initState)
    } catch (error) {
      console.error(error);
    }

  }

  handleChange = e => {
    const { value, name } = e.target;

    this.setState({ [name]: value }, () => console.log(this.state));
  }
  
  render() { 
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2>I do not have an account</h2>
        <span>Sign up with your email and password</span>

        <form className="sign-up-form" onSubmit={ this.handleSubmit }>
          <FormInput
            type="text"
            name="displayName"
            label="Display Name"
            value= { displayName }
            handleChange={ this.handleChange }
            required
          />
          <FormInput
            type="email"
            name="email"
            label="Email"
            value={ email }
            handleChange={ this.handleChange }
            required
          />
          <FormInput
            type="password"
            name="password"
            label="Password"
            value={ password }
            handleChange={ this.handleChange }
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            label="Confirm Password"
            value={ confirmPassword }
            handleChange={ this.handleChange }
            required
          />
          <CustomButton type="submit">Sign up</CustomButton>
        </form>
      </div>
    );
  }
}
 
export default SignUp;