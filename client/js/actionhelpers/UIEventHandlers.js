var TodoAPIUtil = require('../utils/TodoAPIUtil');

var UIEventHandlers = {
    createTodo: function(text) {
        TodoAPIUtil.createTodo(text.trim());
    },
    removeTodo: function(id) {
        TodoAPIUtil.removeTodo(id);
    }
};

module.exports = UIEventHandlers;