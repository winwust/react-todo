var AppDispatcher = require('../dispatcher/AppDispatcher');
var TodoConstants = require('../constants/TodoConstants');

var ServerEventHandlers = {
    receiveListItems: function(list) {
        AppDispatcher.dispatch({
            type: TodoConstants.actionType.LIST_ITEMS,
            data: list
        });
    }
};

module.exports = ServerEventHandlers;