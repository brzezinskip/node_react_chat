import React from 'react';
import {render} from 'react-dom';
import '../../../styles/message.css';

export default function Message(props) {
  return (
    <li>
      <div className={`message-container ${ props.message.isOwn ? 'own-message' : 'user-message'}`}>
        <p className="nickname">{props.message.username}</p>
        <p className="message-body">{props.message.body}</p>
        <hr/>
        <p className="message-date">{props.message.date.toString()}</p>
      </div>
    </li>
  );
}
