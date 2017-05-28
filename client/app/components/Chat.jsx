import React from 'react';
import {render} from 'react-dom';
import MessagesList from './messages/MessagesList.jsx';
import Message from './messages/Message.jsx';
import * as io from "socket.io-client";

const socket = io();

export default class Chat extends React.Component {

  constructor() {
    super();
    this.state = {
      messages: [],
      message: '',
      userId: ''
    };
  }

  componentDidMount() {
    socket.on('socket id', id => {
      this.setState({
        userId: id,
      })
    })
  }

  componentWillMount() {
    this.setState({
      messages: [
        {
          id: 1,
          body: 'test body',
          username: 'First user'
        },
        {
          id: 2,
          body: 'test body 2',
          username: 'Second user'
        }
      ]
    });
  }

  onChange(event) {
    this.setState({
      message: event.target.value,
    })
  }

  onSubmit(event) {
    event.preventDefault();
    socket.emit('chat message', {
      message: this.state.message,
      userId: this.state.userId,
    });
    this.setState({ message: '' });
  }

  render () {
    console.log(this.state.messages)
      return (
        <div>
          <MessagesList messages={ this.state.messages } />
          <form onSubmit={ this.onSubmit.bind(this)}>
            <input
              type='text'
              onChange={this.onChange.bind(this)}
              value={ this.state.message }
            />
            <button>Submit</button>
          </form>
        </div>
      )
  }
}
