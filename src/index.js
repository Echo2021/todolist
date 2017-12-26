import React from 'react';
import ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import styles from './less/index.less';


import Header from './components/Header';
import Section from './components/Section';
import Container from './components/Container';

import TodoFooter from './components/TodoFooter';
import TodoHeader from './components/TodoHeader';
import TodoList from './components/TodoList';
import TodoItem from './components/TodoItem';



if(module.hot){
	module.hot.accept(()=>{
		ReactDOM.render(
				<AppContainer>
					<Container/>
				</AppContainer>,
				document.getElementById('app')
			);
	});
}

ReactDOM.render(
		<AppContainer>
			<Container/>
		</AppContainer>,
		document.getElementById('app')
	);