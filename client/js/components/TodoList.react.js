var React = require('react');
var TodoItem = require('./TodoItem.react');

var TodoList = React.createClass({
    render: function() {
        var todos = [];
        this.props.items.forEach(function(item) {
            todos.push(<TodoItem key={item.id} item={item} />);
        });
        
        return (
            <section id='main'>
                <ul>{todos}</ul> 
            </section>
        );  
    }
});

module.exports = TodoList;