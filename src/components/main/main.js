import React from 'react';

import App from '../app';

import './index.scss'

const Main = ({ clazz }) => {
	return (
		<div className={`${clazz} main`}>
			<div className='main__inner'>
				<App/>
			</div>
		</div>
	)
};

export default Main;