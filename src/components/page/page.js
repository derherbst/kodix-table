import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';

import Header from '../header';
import Main from '../main';

const Page = () => {
	return (
		<div className="page">
			<Header clazz='page__header' />
			<Main clazz='page__body' />
		</div>
	);
};

export default Page;