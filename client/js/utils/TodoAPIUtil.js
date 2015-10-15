var TodoConstants = require('../constants/TodoConstants');

var ServerEventHandlers = require('../actionhelpers/ServerEventHandlers');

module.exports = {
    getTodoList: function() {
        $.get(TodoConstants.api.RESOURCE, function(data) {
            if (!data.error) {
                ServerEventHandlers.receiveListItems(data);
            }
        });
    },
    
    createTodo: function(text) {
        var getTodoList = this.getTodoList;
        $.post(TodoConstants.api.RESOURCE, {text: text}, function(message) {
            if (!message.error) {
                getTodoList();
            }
        });
    },
    
    removeTodo: function(id) {
        var getTodoList = this.getTodoList;
        var url = TodoConstants.api.RESOURCE + '/' + id;
        $.ajax({
            url: url,
            type: 'DELETE',
            success: function(message) {
                if (!message.error) {
                    getTodoList();
                }
            }
        });
    }
};