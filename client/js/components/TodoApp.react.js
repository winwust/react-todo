var React = require('react');
var TodoTextInput = require('./TodoTextInput.react');
var TodoList = require('./TodoList.react');
var TodoStore = require('../stores/TodoStore');

var getTodoState = function() {
    return {
        allTodos: TodoStore.getAll()
    };
};

var TodoApp = React.createClass({
    getInitialState: function() {
        return getTodoState();    
    },
    
    componentDidMount: function() {
        TodoStore.addChangeListener(this._onChange);
    },
    
    componentWillUnmount: function() {
        TodoStore.removeChangeListener(this._onChange);
    },
    
    render: function() {
        return (
            <section id="app">
                <h1>Todo List</h1>
                <TodoTextInput 
                    placeholder="What needs to be done?"
                />
                <TodoList items={this.state.allTodos}/>
            </section>
        );  
    },
    
    _onChange: function() {
        this.setState(getTodoState());
    },
});

module.exports = TodoApp;