import React from 'react';
import {render} from 'react-dom';
import Chat from './components/Chat.jsx';

class App extends React.Component {
  render () {
    return (
      <Chat />
    )
  }
}

render(<App/>, document.getElementById('app'));
