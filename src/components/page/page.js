import React from 'react';

import './index.scss';

import Header from '../header';
import Main from '../main';
import Footer from '../footer';

const Page = () => {
	return (
		<div className="page">
			<Header clazz='page__header' />
			<Main clazz='page__body' />
			<Footer clazz='page__footer' />
		</div>
	);
};

export default Page;