var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');

var TodoApp = require('./components/TodoApp.react');
var todoApiUtil = require('./actionhelpers/todo.api.util');

todoApiUtil.getTodoList();

ReactDOM.render(
  <TodoApp />,
  $('#todoapp')[0]
);
