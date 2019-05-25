import React from 'react'

import './index.scss'

const Footer = ({ clazz }) => {
    return (
        <footer className={`${clazz} footer`}>
            <div className='footer__inner'>
                <div className="footer__content">
	                <div className="footer__copyright">
		                © 2015 CAPTAIN QUACK
	                </div>
	                <div className="footer__slogan">
		                Десница тысячелетия и моллюск!
	                </div>
                </div>
            </div>
        </footer>
    )
};

export default Footer
