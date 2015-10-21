var React = require('react');
var uiEventsHandler = require('../actionhelpers/ui.events.handler');
var todoConstants = require('../constants/todo.constants');

var TodoTextInput = React.createClass({
    getInitialState: function() {
        return {
            value: ''  
        }; 
    },
    
    render: function() {
        return (
            <input 
                type="text"
                className="form-control"
                placeholder={this.props.placeholder}
                autoFocus={true}
                onChange={this._onChange}
                onKeyDown={this._onKeyDown}
                value={this.state.value}
            />
        );  
    },
    
    _save: function() {
        uiEventsHandler.createTodo(this.state.value);
        this.setState({
            value: ''
        });
    },
    
    _onKeyDown: function(evt) {
        if (evt.keyCode === todoConstants.keyCode.ENTER) {
            this._save();
        }
    },
    
    _onChange: function(evt) {
        this.setState({
            value: evt.target.value
        });
    }
});

module.exports = TodoTextInput;