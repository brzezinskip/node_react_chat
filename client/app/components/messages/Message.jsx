import React from 'react';
import {render} from 'react-dom';

export default function Message(props) {
  return (
    <li>
      <h1>{props.message.username}: {props.message.body}</h1>
    </li>
  );
}
