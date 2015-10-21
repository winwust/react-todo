var dispatcher = require('../dispatcher/client.dispatcher');
var todoConstants = require('../constants/todo.constants');
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
        this.emit(todoConstants.storeEventType.CHANGE);
    },
    
    addChangeListener: function(callback) {
        this.on(todoConstants.storeEventType.CHANGE, callback);
    },
    
    removeChangeListener: function(callback) {
        this.removeListener(todoConstants.storeEventType.CHANGE, callback);
    }
});

var actionHandler = function(actionObj) {
    switch(actionObj.type) {
        case todoConstants.actionType.LIST_ITEMS:
            _createTodos(actionObj.data);
            TodoStore.emitChange();
            break;
        default:
            break;
    }
};
dispatcher.register(actionHandler);

module.exports = TodoStore;