import React from 'react';
import {render} from 'react-dom';
import Message from './Message.jsx';

export default function MessagesList(props) {
  return (
    <ul className="messages-list">
    {props.messages.map(message =>
      <Message message={message} key={message.body}/>
    )}
    </ul>
  );
}
