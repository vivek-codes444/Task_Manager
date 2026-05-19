const express = require('express');
const router = express.Router();
const {
    getAllTasks,
    getOneTask,
    updateTask,
    deleteTask,
    createTask
} = require('../controllers/tasks.js');

router.route('/').get(getAllTasks).post(createTask);
router.route('/:id').get(getOneTask).delete(deleteTask).patch(updatetask);

module.exports = router;    