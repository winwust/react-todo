var AppDispatcher = require('../dispatcher/AppDispatcher');
var TodoConstants = require('../constants/TodoConstants');

var ServerActions = {
    receiveListItems: function(list) {
        AppDispatcher.dispatch({
            actionType: TodoConstants.actionType.SERVER_LIST_MSG,
            response: list
        });
    }
};

module.exports = ServerActions;