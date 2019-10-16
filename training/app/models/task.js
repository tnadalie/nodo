module.exports = {
   createTask: function (name, pool, callback) {
    pool.query('INSERT INTO tasks (task_name) VALUES ($1) RETURNING *;', [name], function (err, res) {
        if (err) {
            callback(err, null);
        } else {
            callback(null, res.rows[0]);
        }
    });
  },
  getAllTasks: function (pool, callback) {
      pool.query('SELECT * FROM tasks;', function (err, res) {
          if (err) {
              callback(err, null);
          } else {
              callback(null, res.rows);
          }
      });
  },
  deleteTask: function (pool, id, callback) {
      pool.query('DELETE FROM tasks WHERE task_id = $1', [id], function (err, res) {
        if (err) {
            callback(err);
        } else {
            callback(null);
        }
    });
  },
  updateTask: function (pool, id, isDone, callback) {
      pool.query('UPDATE tasks SET is_done = $1 WHERE task_id = $2 RETURNING *;', [isDone, id], function (err, res) {
          if (err) {
              callback(err, null);
          } else {
              callback(null, res.rows[0]);
          }
      });
  }

}
