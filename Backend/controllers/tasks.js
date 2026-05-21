const Task = require('../models/task');
const customErr = require("../error/customErr")
const asyncWrapper = require("../middleware/asyncWrapper")

const getAllTasks = asyncWrapper(async (req, res) => {
    const tasks = await Task.find()

    if (tasks.length === 0){
    throw new customErr("Tasks not found", 404)
    }
    res.status(200).json(tasks)  
})

const getOneTask = asyncWrapper(async (req, res) =>{
    const oneTask = await Task.findById(req.params.id)

    if (!oneTask){
        throw new customErr("Task not found", 404)
    }
    res.status(200).json(oneTask)
})

const updateTask = asyncWrapper(async (req, res) => {
    const updateTask = await Task.findByIdAndUpdate(req.params.id,req.body, {new : true})

    if (!updateTask){
        throw new customErr("Task not found", 404)
       }
    res.status(200).json(updateTask)
})

const deleteTask = asyncWrapper(async (req, res) => {
    
    const deleteTask = await Task.findByIdAndDelete(req.params.id)
        
    if (!deleteTask) {
        throw new customErr("Task not found", 404)
    }
    res.status(200).json({message: "Task deleted"})
})

const createTask = asyncWrapper(async (req, res) => {
    const newTask = new Task({
        title: req.body.title,
    })
    const savedTask = await newTask.save()
    res.status(201).json(savedTask)
})

module.exports = {
    getAllTasks,
    getOneTask,
    updateTask,
    deleteTask,
    createTask
};
