const Todo = require('../models/Todo')

class TodoController {
    one = async(req, res) => {
        const id = req.params.id
        const result = await Todo.findById(id)
        return res.json(result)

    }

    all = async(req, res) => {
        const result = await Todo.find()
        return res.status(200).json(result) 
        
    }


    create = async(req, res) => {
        const {...params} = req.body

        const todo = new Todo(params)
        const result = await todo.save()

        return res.status(201).json(result)
        }


    update = async(req, res) => {
        const { id } = req.params
        const { ...params } = req.body

        const result = await Todo.findByIdAndUpdate(id, params, { new: true })

        return res.status(202).json(result)

        }


    delete = async(req, res) => {
        const { id } = req.params
        
        const result = await Todo.findByIdAndDelete(id)

        return res.status(202).json(result) 

        }
}
module.exports = new TodoController