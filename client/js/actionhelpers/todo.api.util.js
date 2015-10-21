var todoConstants = require('../constants/todo.constants');
var serverEventsHandler = require('../actionhelpers/server.events.handler');

module.exports = {
    getTodoList: function() {
        $.get(todoConstants.api.RESOURCE, function(data) {
            if (!data.error) {
                serverEventsHandler.receiveListItems(data);
            }
        });
    },
    
    createTodo: function(text) {
        var getTodoList = this.getTodoList;
        $.post(todoConstants.api.RESOURCE, {text: text}, function(message) {
            if (!message.error) {
                getTodoList();
            }
        });
    },
    
    removeTodo: function(id) {
        var getTodoList = this.getTodoList;
        var url = todoConstants.api.RESOURCE + '/' + id;
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