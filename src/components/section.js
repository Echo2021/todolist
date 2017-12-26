import React from 'react';
import TodoList from './TodoList';
import TodoFooter from './TodoFooter';
import TodoHeader from './TodoHeader';
import TodoItem from './TodoItem';

class Section extends React.Component {
	constructor(props){
		super(props);
		this.state={
			todos:[],
			isAllCheck:false,
		};
		this.addTodo = this.addTodo.bind(this);
		this.deleteTodo = this.deleteTodo.bind(this);
		this.changeTodoState = this.changeTodoState.bind(this);
		this.clearDone = this.clearDone.bind(this);

	}
	addTodo(item){

		this.state.todos.push(item);

		this.setState({
			todos:this.state.todos
		});

	}
	deleteTodo(index){
		this.state.todos.splice(index,1);
		this.setState({todos:this.state.todos});
	}

	clearDone(){
		let todos = this.state.todos.filter(todo=>!todo.isDone);
		console.log(todos);
		this.setState({
			todos:todos
		});
	}

	changeTodoState(index,isDone,isChangeAll=false){
		//console.log(index,isDone);
		if(isChangeAll){
			this.setState({
				todos:this.state.todos.map((todo)=>{
					todo.isDone = isDone;
					return todo;
				}),
				isAllCheck:isDone

			});
		}else {
			this.state.todos[index].isDone = isDone;
			this.allChecked();
		}
	}

	allChecked(){
		let isAllCheck = false;
		if(this.state.todos.every(todo=>todo.isDone)){
			isAllCheck=true
		}
		this.setState({
			todos:this.state.todos,
			isAllCheck:isAllCheck
		});
	}

	render(){
		let info={
			isAllCheck:this.state.isAllCheck,
			todoCount:this.state.todos.length||0,
			todoDoneCount:(this.state.todos&&this.state.todos.filter((todo)=>todo.isDone)).length||0
		}

		return(
				<div className="container">
					
					<TodoHeader addTodo={this.addTodo}/>
	
					<TodoList todos={this.state.todos} changeTodoState={this.changeTodoState} deleteTodo={this.deleteTodo}/>
					
					<TodoFooter {...info} clearDone={this.clearDone} changeTodoState={this.changeTodoState}/>
					
					
				</div>
			);
	}
}

export default Section 