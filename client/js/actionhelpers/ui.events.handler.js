var todoApiUtil = require('./todo.api.util');

module.exports = {
    createTodo: function(text) {
        todoApiUtil.createTodo(text.trim());
    },
    removeTodo: function(id) {
        todoApiUtil.removeTodo(id);
    }
};