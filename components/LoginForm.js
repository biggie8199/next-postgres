import React from 'react';
import Input from './Input';
import Button from './Button';
import * as Actions from '../common/actions';
import * as Strings from '../common/strings';
import { connect } from 'react-redux';

class LoginForm extends React.Component {
  state = {
    username: '',
    password: '',
  };

  _handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  _handleSubmit = e => {
    this.props.dispatch(Actions.requestLogin(this.state));
  };

  render() {
    return (
      <div className="form">
        <style jsx>{`
          .spacer {
            height: 16px;
            margin: 0;
            width: 100%;
            display: block;
            border: 0;
          }

          .large-spacer {
            height: 24px;
            margin: 0;
            width: 100%;
            display: block;
            border: 0;
          }
        `}</style>
        <Input
          label="Username"
          autoFocus
          value={this.state.username}
          name="username"
          onChange={this._handleChange}
        />
        <hr className="spacer" />
        <Input
          label="Password"
          value={this.state.password}
          type="password"
          name="password"
          onChange={this._handleChange}
          onSubmit={this._handleSubmit}
        />
        <hr className="large-spacer" />
        <Button onClick={this._handleSubmit}>
          Log in
        </Button>
      </div>
    );
  }
}

export default connect(state => state)(LoginForm);
