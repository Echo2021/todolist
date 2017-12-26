import React from 'react';


class TodoHeader extends React.Component {
	/*constructor(props){
		super(props);
		this.state= {
			todos:[]
		};
		this.handleKeyUp = this.handleKeyUp.bind(this);
	}
*/
	handleKeyUp(e){
		if(e.keyCode==13){
			let value = e.target.value;
			//console.log(value);
			if(!value) return false;

			let date = new Date().Format("yyyy-MM-dd hh:mm");

			let newTodoItem ={
				text:value,
				isDone:false,
				time:date
			};

			e.target.value='';

			this.props.addTodo(newTodoItem);


		}

	}

	componentWillMount(){
		Date.prototype.Format = function(fmt){
			let o ={
				"M+":this.getMonth()+1,//月份
				"d+":this.getDate(),//日
				"h+":this.getHours(),//小时
				"m+":this.getMinutes(),//分
				"s+":this.getSeconds(),//秒
			};
		if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    	for (var k in o)
	    	if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
	    return fmt;
		}
	}
	
	render(){
		return(
				<p className="enter">
						<input type="text" placeholder="todo..." onKeyUp={this.handleKeyUp.bind(this)}/>
						{/*<button type="button" onClick={this.handleClick}>确定</button>*/}
				</p>
			);
	}
}

export default TodoHeader