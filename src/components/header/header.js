import React from 'react';

import './index.scss';

const Header = ({clazz}) => {

	return (
		<header className={`${clazz} header`}>
			<div className="header__inner">
				<div className="header__logo">
					{/*<div className="logo"></div>*/}
				</div>
			</div>
		</header>
	)
};

export default Header;