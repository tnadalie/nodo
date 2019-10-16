import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';


class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
          tasks: [],
          taskName: ''
      };
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
      // Now we can fetch data
      axios.get('http://localhost:3001/api/tasks/')
        .then(response => {
          this.setState({ tasks: response.data })
        })
        .catch(err => console.error(err))
  }

  handleSubmit(e) {
      e.preventDefault()
      if (this.state.taskName === '' || this.state.taskName === null) {
          return
      } else {
          axios.put('http://localhost:3001/api/tasks/', { name: this.state.taskName })
              .then(response => {
                  this.setState(state => ({
                      tasks: state.tasks.concat(response.data),
                      taskName: ''
                  }));
              })
              .catch(err => console.error(err))
      }
  }

  handleChange(e) {
      this.setState({ taskName: e.target.value })
  }

  render() {
      return (
          <div>
              <h1>To-Do</h1>
              <form onSubmit={this.handleSubmit}>
              <input onChange={this.handleChange} type="text" placeholder="Add a new task" value={this.state.taskName} />
                  <button type="submit">Add</button>
              </form>
              <ul>
                  {
                      this.state.tasks.map(task => <li key={task.task_id}>{task.task_name}</li>)
                  }
              </ul>
          </div>
      )
  }
}

export default App;
