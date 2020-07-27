import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectSignUpError } from '../../redux/user/user.selector';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

// import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import { signUpStart } from '../../redux/user/user.actions';

import {
  SignUpContainer,
  SignUpTitle
} from './sign-up.styles';

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
    const { signUpStart } = this.props
    const { email, displayName, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    signUpStart({ email, displayName, password });
  }

  handleChange = e => {
    const { value, name } = e.target;

    this.setState({ [name]: value });
  }

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    const { signUpError } = this.props;
    return (
      <SignUpContainer>
        <SignUpTitle>I do not have an account</SignUpTitle>
        <span>Sign up with your email and password</span>

        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            label="Display Name"
            value={displayName}
            handleChange={this.handleChange}
            required
          />
          <FormInput
            type="email"
            name="email"
            label="Email"
            value={email}
            handleChange={this.handleChange}
            required
          />
          <FormInput
            type="password"
            name="password"
            label="Password"
            value={password}
            handleChange={this.handleChange}
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            label="Confirm Password"
            value={confirmPassword}
            handleChange={this.handleChange}
            required
          />
          <CustomButton type="submit">Sign up</CustomButton>
          <h3>{signUpError}</h3>
        </form>
      </SignUpContainer>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  signUpError: selectSignUpError
})

const mapDispatchToProps = dispatch => ({
  signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials))
})

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);