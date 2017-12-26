import React from 'react';

import TodoItem from './TodoItem';

class TodoList extends React.Component{
	render(){
		if(this.props.todos.length==0){
			return(
					<div className="todo-empty">恭喜，没有待办事项！</div>
				);
		}else {
			return(
				<ul>
					{	
						this.props.todos.map((todo,index)=>{
						 return	<TodoItem text={todo.text} isDone={todo.isDone} time={todo.time} index={index} key={index} {...this.props}/>
						})
						
					}
				</ul>
					
				);
		}
	}
}

export default TodoList 