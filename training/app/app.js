const app = require('express')()
const port = 3000

// const express = require('express');
// const app = express();
// app.use(express.static('./to-do/build'));


const pg = require("pg")
const cors = require('cors');
app.use(cors())
const Pool = pg.Pool;

const bodyParser = require('body-parser');
app.use(bodyParser.json())

const taskRouteInit = require('./routes/task')

const pool = new Pool({
  user: 'postgres',
  host: 'postgres.localhost',
  database: 'postgres',
  password: 'mysecretpassword',
  port: 5432,
})

const createTableString = `
    CREATE TABLE IF NOT EXISTS tasks(
        task_id SERIAL PRIMARY KEY,
        task_name VARCHAR(255) NOT NULL,
        is_done boolean NOT NULL DEFAULT false
    );
`;

pool.query(createTableString, function (err, res) {
    if (err) {
        console.error(err);
    } else {
        console.log(res);
    }
});

taskRouteInit.initRoutes(app, pool)

app.get('/', function (req, res) {
  res.send("Hellow world!")
})

app.listen(port, function () {
  console.log("Server started on port " + port);
})
