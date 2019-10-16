 const taskModel = require('../models/task')


module.exports = {
   initRoutes: function(app, pool) {
   // Handle PUT request to /api/tasks/
   // Creates a new task and return it
   app.put('/api/tasks/', function (req, res) {
       const name = req.body.name;
       taskModel.createTask(name, pool, function (err, task) {
           if (err) {
               res.sendStatus(500)
           } else {
               res.send(JSON.stringify(task))
           }
       })
   })

   // Handle GET request to /api/tasks/
   // Returns all tasks
   app.get('/api/tasks/', function (req, res) {
       taskModel.getAllTasks(pool, function (err, tasks) {
           if (err) {
               res.sendStatus(500)
           } else {
               res.send(JSON.stringify(tasks))
           }
       })
   })

   // Handle delete requests to /api/tasks/task_id
   // Deletes a task and return a status code 200
   app.delete('/api/tasks/:id', function (req, res) {
       const id = req.params.id;
       taskModel.deleteTask(pool, id, function (err) {
           if (err) {
               res.sendStatus(500)
           } else {
               res.sendStatus(200)
           }
       })
   })


   // Handle post requests to /api/tasks/task_id
   // Update task's is_done column and return it
   app.post('/api/tasks/:id', function (req, res) {
       const id = req.params.id;
       const isDone = req.body.isDone;
       taskModel.updateTask(pool, id, isDone, function (err, task) {
           if (err) {
               res.sendStatus(500)
           } else {
               res.send(JSON.stringify(task))
           }
       })
   })
  }
}
