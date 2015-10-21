var React = require('react');
var ReactDOM = require('react-dom');

var TodoApp = require('./components/TodoApp.react');
var todoApiUtil = require('./actionhelpers/todo.api.util');

todoApiUtil.getTodoList();

ReactDOM.render(
  <TodoApp />,
  document.getElementById('todoapp')
);
