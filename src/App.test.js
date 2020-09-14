import React from 'react';
import ReactDOM from 'react-dom'
import App from './App';

test('it renders without crashing', () => {
  const div = document.creatElement('div');

  ReactDOM.render(<App/>, div);

  ReactDOM.unmountComponentAtNode(div);
});
