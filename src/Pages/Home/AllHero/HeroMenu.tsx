import React from 'react';
import { Link } from 'react-router-dom';
import '../AllCss/HeroMenu.css';

const HeroMenu = () => {
    return (
        <div className='hero_menu' style={{opacity: '1', left: '86.5px'}}>
            <button className="heroMenu_closeBtn">
                <span></span>
                <span></span>
            </button>

            <ul className="hero-menu__list">
				<li className="hero-menu__item"><Link className="hero-menu__link sc" to="#overview">Overview</Link></li>
				<li className="hero-menu__item"><Link className="hero-menu__link sc" to="#bar">Goat BARn</Link></li>
				<li className="hero-menu__item"><Link className="hero-menu__link" to="/roadmap">Roadmap</Link></li>
				<li className="hero-menu__item"><Link className="hero-menu__link sc" to="#faq">FAQs</Link></li>
				<li className="hero-menu__item"><Link className="hero-menu__link sc" to="#team">Team</Link></li>
			</ul>

            <Link to="#" className="heroMenu_btn btn">MINT</Link>
        </div>
    );
};

export default HeroMenu;