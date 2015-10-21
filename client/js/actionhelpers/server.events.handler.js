var dispatcher = require('../dispatcher/client.dispatcher');
var todoConstants = require('../constants/todo.constants');

module.exports = {
    receiveListItems: function(list) {
        dispatcher.dispatch({
            type: todoConstants.actionType.LIST_ITEMS,
            data: list
        });
    }
};