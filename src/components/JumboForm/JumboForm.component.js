import React, { Component } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Alert
} from "reactstrap";

export default class Example extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      confirmPassword: "",
      error: "",
      confirmRegister: false
    };
  }
  register = () => {
    if (this.comparePassword()) {
      this.comparePassword();
      setTimeout(() => alert("Registered"), 1000);
    } else {
    }
  };
  comparePassword = () => {
    const { password, confirmPassword } = this.props;
    if (!password || (password && password.length < 8)) {
      this.setState({ error: "Password Minimum is 8 characters" });

      setTimeout(() => this.setState({ error: "" }), 1000);

      return false;
    } else if (
      password &&
      confirmPassword &&
      password.length &&
      password.length === confirmPassword.length
    ) {
      if (password === confirmPassword) {
        setTimeout(() => {
          this.setState({ confirmRegister: true });
          return true;
        }, 1000);
      } else {
        this.setState({ error: "Passwords do not match" });

        setTimeout(() => this.setState({ error: "" }), 1000);

        return false;
      }
    } else {
      this.setState({ error: "Password lengths do not match." });

      setTimeout(() => this.setState({ error: "" }), 1000);

      return false;
    }
  };
  inputHandler = (e) => this.setState({ [e.target.name]: e.target.value });
  render() {
    const {
      email,
      password,
      confirmPassword,
      error,
      confirmRegister
    } = this.state;
    return (
      <Form>
        <h2>Sign up Today!</h2>
        {error && error.length && !confirmRegister && (
          <Alert color="danger">{error}</Alert>
        )}
        {confirmRegister && !error && (
          <Alert color="success">Register Complete, Sign in.</Alert>
        )}
        {!confirmRegister && !error && (
          <Alert color="none" style={{ color: "white" }}>
            ** This is a test app, use a unique password **
          </Alert>
        )}
        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            type="email"
            name="email"
            value={email}
            onChange={this.inputHandler}
            id="email"
          />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input
            type="password"
            name="password"
            value={password}
            onChange={this.inputHandler}
            id="password"
          />
        </FormGroup>
        <FormGroup>
          <Label for="confirmPassword">Confirm Password</Label>
          <Input
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.inputHandler}
            id="confirmPassword"
          />
        </FormGroup>
        <FormText>* This is a test app, use a unique password</FormText>
        <Button onClick={this.register}>Submit</Button>
      </Form>
    );
  }
}
