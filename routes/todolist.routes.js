module.exports = app => {

    const todolist = require('../controllers/todolist.controller.js')

    const router = require('express').Router();


    // create todo 
    router.post('/',todolist.create)

    // find all todos
    router.get('/',todolist.findAll)

    // find one todo
    router.get('/:id',todolist.findOne)

    // update todo
    router.put('/:id',todolist.update)

    router.delete('/:id',todolist.delete)

    app.use('/api/todolist',router)
 }
 