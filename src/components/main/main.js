import React from 'react';

import App from '../app';

import './index.scss'

const Main = ({ clazz }) => {
	return (
		<main className={`${clazz} main`}>
			<div className='main__inner'>
				<App/>
			</div>
		</main>
	)
};

export default Main;