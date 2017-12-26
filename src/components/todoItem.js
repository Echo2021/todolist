import React from 'react';


class TodoItem extends React.Component {

	handlerChange(){

		let isDone= !this.props.isDone;
		//console.log(isDone);
		this.props.changeTodoState(this.props.index,isDone);
	}

	handlerDelete(){
		this.props.deleteTodo(this.props.index);
	}
	render(){
		
		return(
				<li>
						<input type="checkbox" checked={this.props.isDone} onChange={this.handlerChange.bind(this)} />
						<span className="date">{this.props.time}</span>
						<span className="content">{this.props.text}</span>
						<button ref="delButton" type="button" className="del" onClick={this.handlerDelete.bind(this)}>删除</button>
				</li>
			);
	}
}

export default TodoItem