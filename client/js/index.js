var React = require('react');
var ReactDOM = require('react-dom');

var TodoApp = require('./components/TodoApp.react');
var TodoAPIUtil = require('./utils/TodoAPIUtil');

TodoAPIUtil.getTodoList();

ReactDOM.render(
  <TodoApp />,
  document.getElementById('todoapp')
);
