import React from 'react';

import Header from './Header';
import Section from './Section';

class Container extends React.Component {
	render(){
		return(
				<div>
					<Header/>
					<Section/>
				</div>
			);
	}
}

export default Container