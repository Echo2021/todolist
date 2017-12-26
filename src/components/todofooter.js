import React from 'react';


class TodoFooter extends React.Component {

	handleChange(e){
		//let isAllCheck = !this.props.isAllCheck;
		//console.log(e.target.checked);

		this.props.changeTodoState(null,e.target.checked,true);
	}
	delAll(){
		this.props.clearDone();
	}

	render(){
		let remainder = this.props.todoCount-this.props.todoDoneCount;
		return (
				<div className="footer">
					<input type="checkbox"  checked={this.props.isAllCheck} onChange={this.handleChange.bind(this)}/>
					<span className="all">全选</span>
					<span className="remainder">剩余{remainder}项未完成</span>
					<button type="button" className="delAll" onClick={this.delAll.bind(this)}>删除全部已完成</button>

				</div>
			);
	}
}

export default TodoFooter