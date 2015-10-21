var React = require('react');
var uiEventsHandler = require('../actionhelpers/ui.events.handler');

var TodoItem = React.createClass({
    _onRemoveClick: function() {
        uiEventsHandler.removeTodo(this.props.item.id);
    },
    
    render: function() {
        var item = this.props.item;

        return (
            <li
                key={item.id}
            >
                {item.text}
                <button 
                    className="btn btn-link btn-xs"
                    onClick={this._onRemoveClick}>
                    <span className="glyphicon glyphicon-remove"></span>
                </button>
            </li>
        );  
    }
});

module.exports = TodoItem;