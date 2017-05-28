import React from 'react';
import {render} from 'react-dom';
import Message from './Message.jsx';

export default function MessagesList(props) {
  console.log(props);
  return (
    <ul>
    {props.messages.map(message =>
      <Message message={message} key={message.body} />
    )}
    </ul>
  );
}
