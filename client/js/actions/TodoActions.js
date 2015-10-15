var TodoAPIUtil = require('../utils/TodoAPIUtil');

var TodoActions = {
    create: function(text) {
        TodoAPIUtil.createTodo(text.trim());
    },
    remove: function(id) {
        TodoAPIUtil.removeTodo(id);
    }
};

module.exports = TodoActions;