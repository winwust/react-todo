var React = require('react');
var TodoTextInput = require('./TodoTextInput.react');
var TodoList = require('./TodoList.react');
var todoStore = require('../stores/todo.store');

var getTodoState = function() {
    return {
        allTodos: todoStore.getAll()
    };
};

var TodoApp = React.createClass({
    getInitialState: function() {
        return getTodoState();    
    },
    
    componentDidMount: function() {
        todoStore.addChangeListener(this._onChange);
    },
    
    componentWillUnmount: function() {
        todoStore.removeChangeListener(this._onChange);
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