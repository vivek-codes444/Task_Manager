const express = require('express')
const app = express()
const port = 3000
const tasks = require('./routes/tasks.js')
require('./db/connect.js')    

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.use(express.json())

app.use('/api/v1/tasks', tasks)

app.listen(port, () =>{
    console.log(`Server is running on port ${port}`)   
})