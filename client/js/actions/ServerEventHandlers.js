var AppDispatcher = require('../dispatcher/AppDispatcher');
var TodoConstants = require('../constants/TodoConstants');
var ActionObject = require('./ActionObject');

var ServerEventHandlers = {
    receiveListItems: function(list) {
        AppDispatcher.dispatch(new ActionObject(
            TodoConstants.actionType.LIST_ITEMS,
            list
        ));
    }
};

module.exports = ServerEventHandlers;