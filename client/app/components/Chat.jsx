import React from 'react';
import {render} from 'react-dom';
import MessagesList from './messages/MessagesList.jsx';
import Message from './messages/Message.jsx';
import * as io from "socket.io-client";
import '../../styles/chat.css';
import '../../styles/form.css';

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
          body: 'test body test body test body test body test body test body test body test body test body test body test body test body test body',
          username: 'First user',
          date: '12:30',
          isOwn: true
        },
        {
          id: 2,
          body: 'test body test body test body test body test body test body test body test body test body test body test body test body test body2',
          username: 'Second user',
          date: '12:45',
        },
        {
          id: 3,
          body: 'test body test body test body test body test body test body test body test body test body test body test body test body test body3',
          username: 'First user',
          date: '09:30',
          isOwn: true
        },
        {
          id: 4,
          body: 'taest body test body test body test body test body test body test body test body test body test body test body test body test body3',
          username: 'First us2er',
          date: '09:320',
          isOwn: false
        },
        {
          id: 5,
          body: 'taest body 222test body test body test body test body test body test body test body test body test body test body test body test body3',
          username: 'First u2s2er',
          date: '019:320',
          isOwn: true
        },
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
      return (
        <div className="chat-container">
          <MessagesList messages={ this.state.messages } />
          <form onSubmit={ this.onSubmit.bind(this)} className="input-form">
            <input
              type='text'
              onChange={this.onChange.bind(this)}
              value={ this.state.message }
              placeholder='Type in your message and hit return to send'
            />
          </form>
        </div>
      )
  }
}
