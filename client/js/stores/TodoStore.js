var AppDispatcher = require('../dispatcher/AppDispatcher');
var TodoConstants = require('../constants/TodoConstants');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var _todos = [];

var _createTodos = function(list) {
    _todos = [];
    list.forEach(function(item) {
        _todos.push({id: item._id, text: item.text});
    });
};

var TodoStore = assign({}, EventEmitter.prototype, {
    getAll: function() {
        return _todos;
    },
    
    emitChange: function() {
        this.emit(TodoConstants.eventType.CHANGE_EVENT);
    },
    
    addChangeListener: function(callback) {
        this.on(TodoConstants.eventType.CHANGE_EVENT, callback);
    },
    
    removeChangeListener: function(callback) {
        this.removeListener(TodoConstants.eventType.CHANGE_EVENT, callback);
    }
});

AppDispatcher.register(function(action) {
    switch(action.actionType) {
        case TodoConstants.actionType.SERVER_LIST_MSG:
            _createTodos(action.response);
            TodoStore.emitChange();
            break;
        default:
            break;
    }
});

module.exports = TodoStore;