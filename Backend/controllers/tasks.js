const Task = require('../models/Task');


const getAllTasks = async (req, res) => {
    try{
        const tasks = await Task.find()

        if (tasks.length === 0){
            return res.status(404).json({message: "Tasks not found"})
        }
        res.status(200).json(tasks)  
    }
    catch(err){
        res.status(500).json({message: "No tasks found"})
    }
}

const getOneTask = async (req, res) =>{
    try{
        const oneTask = await Task.findById(req.params.id)

        if (!oneTask){
            return res.status(404).json({message: "Task not found"})
        }
        res.status(200).json(oneTask)
    }
    catch(err){
        res.status(500).json({message: err.message})
    }
}

const updateTask = async (req, res) => {
    try{
        const updateTask = await Task.findByIdAndUpdate(req.params.id,req.body, {new : true})

        if (!updateTask){
            return res.status(404).json({message: "Task not found"})
        }
        res.status(200).json(updateTask)
    }
    catch(err){
        res.status(500).json({message: err.message})
    }
}

const deleteTask = async (req, res) => {
    try{
        const deleteTask = await Task.findByIdAndDelete(req.params.id)
        
        if (!deleteTask) {
            return res.status(404).json({message: "Task not found"})
        }
        res.status(200).json({message: "Task deleted"})
    }
    catch(err){
        res.status(500).json({message: err.message})
    }
}
const createTask = async (req, res) => {
    try{
        const newTask = new Task({
            title: req.body.title,
        })
        const savedTask = await newTask.save()
        res.status(201).json(savedTask)
    }
    catch(err){
        res.status(500).json({message: err.message})
    }
}

module.exports = {
    getAllTasks,
    getOneTask,
    updateTask,
    deleteTask,
    createTask
};
