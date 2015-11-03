var Todo = require('../models/todo.model');

var list = function(req, res) {
    Todo.find(function(err, todos) {
        if (err) {
            res.json({error: err.message});
        } else {
            res.json(todos);
        }
    });
};
 
var create = function(req, res) {
    var item = new Todo();
    item.text = req.body.text;

    item.save(function(err) {
        if (err) {
            res.json({error: err.message});
        } else {
            res.json(item);
        }
    })
};

var del = function(req, res) {
    Todo.findById(req.params.todo_id, function(finderr, item) {
        if (finderr) {
            res.json({error: finderr.message})
        } else {
            if (item !== null) {
                item.remove(function(delerr) {
                    if (delerr) {
                        res.json({error: delerr.message});
                    } else {
                        res.json({confirmation: 'succeed'});
                    }
                });
            } else {
                res.json({error: 'todo item not found'});
            }
        }
    });
};

module.exports = {
    list: list,
    create: create,
    del: del
};