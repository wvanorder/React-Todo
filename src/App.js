import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import { toDos } from './components/TodoComponents/Todo';
import ToDoForm from './components/TodoComponents/TodoForm';
import './components/TodoComponents/Todo.scss';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
    thingsToDo: toDos,
    task: '',
    error: null,
    search: '',
}
  }

componentWillMount() {
  localStorage.getItem('tasks') && this.setState({
    thingsToDo: JSON.parse(localStorage.getItem('tasks')),
    isLoading: false
  });
}

componentDidMount() {
  if(!localStorage.getItem('tasks')) {
    this.fetchData();
  } else{
    console.log('using data from local storage');
  }
}

taskCompleted = (id) => {
  const completedTask = this.state.thingsToDo.filter(thing => thing.id === id)[0];
  completedTask.completed = !completedTask.completed;
  this.setState(state => ({
    thingsTodDo: [...state.thingsToDo, completedTask]
  })); 
}

addTask = event => {
  if(this.state.task ===''){
    return this.setState({
      error: 'You must enter a task!',
    })
  }
  event.preventDefault();
  const newTask = {
      task: this.state.task,
      id: Date.now(),
      completed: false,
      match: true,
  };
  this.setState(state => ({
     thingsToDo: [...state.thingsToDo, newTask], 
     task: '',
     error: null,
  }));
}

removeTasks = event => {
  const incompleteTasks = this.state.thingsToDo.filter(thing => thing.completed === false)
  console.log(incompleteTasks);
  this.setState({
    thingsToDo: [...incompleteTasks]
  })
}


  taskInput = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

componentWillUpdate(nextProps, nextState) {
  localStorage.setItem('tasks', JSON.stringify(nextState.thingsToDo));
  localStorage.setItem('task Date', Date.now());
  if(nextState.search !== this.state.search) {
    this.searchItems(nextState.search);
  }
}

searchItems = (value = this.state.search) => {
  const newArr = this.state.thingsToDo.map(item => {
    if(item.task.includes(value)) {
      item.match = true;
      return item;
    }
    item.match = false;
    return item;
  });
  this.setState({
    thingsToDo: newArr
  });
}


  render() {
    return (
      <div>
        <h2 className="title">Welcome to your To-Do App!</h2>
        
        <ToDoForm  
        searchTerm = {this.state.search}
        error ={this.state.error} 
        addTask={this.addTask} 
        task={this.state.task} 
        taskInput={this.taskInput} 
        removeTasks={this.removeTasks}
        search= {this.searchItems}
        />
        <TodoList 
        taskCompleted={this.taskCompleted} 
        things = {this.state.thingsToDo}
        />
      </div>
    );
  }
}

export default App;
