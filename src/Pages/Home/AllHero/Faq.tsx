import React from 'react';
import { useState } from 'react';
import '../AllCss/Faq.css';

const Faq = () => {
    const [toggle, setToggle] = useState('');

    const handleToggle = (value) => {
        if (toggle === value) {
            setToggle('');
        } else {
            setToggle(value);
        }
    }

    return (
        <div className='faq' id="faq">
            <div className="container">
                <h2 className="faq_title" data-aos="fade-up">FAQs</h2>
            
                <p className="faq_desc" data-aos="fade-up">Cards on the Table</p>
            
                <ul className="faq_list">
                    <li className="faq__item" data-aos="fade-up" onClick={() => handleToggle('1')}>
						<p className="faq__item-head">How can I mint?{toggle === '1' ? <span className="faq__item-endicator"></span> : <span className="faq__item-indicator"></span>}</p>
						<p className="faq__item-content" style={toggle === '1' ? {display: 'block'} : {display: 'none'}}>The “mint” button in the menu of this website will take you to a platform where you can mint the goats. There will be 4 phases of the minting procedure. The procedure instructions will be given closer to the mint date.</p>
					</li>
                    <li className="faq__item" data-aos="fade-up" onClick={() => handleToggle('2')}>
						<p className="faq__item-head">Can I use my phone to mint?{toggle === '2' ? <span className="faq__item-endicator"></span> : <span className="faq__item-indicator"></span>}</p>
						<p className="faq__item-content" style={toggle === '2' ? {display: 'block'} : {display: 'none'}}>Yes, minting with a phone is possible with Sollet.</p>
					</li>
                    <li className="faq__item " data-aos="fade-up" onClick={() => handleToggle('3')}>
						<p className="faq__item-head">What is the price?{toggle === '3' ? <span className="faq__item-endicator"></span> : <span className="faq__item-indicator"></span>}</p>
						<p className="faq__item-content" style={toggle === '3' ? {display: 'block'} : {display: 'none'}}>The price for each Goat NFT will be 1.5 Sol.</p>
					</li>
                    <li className="faq__item " data-aos="fade-up" onClick={() => handleToggle('4')}>
						<p className="faq__item-head">When is the drop?{toggle === '4' ? <span className="faq__item-endicator"></span> : <span className="faq__item-indicator"></span>}</p>
						<p className="faq__item-content" style={toggle === '4' ? {display: 'block'} : {display: 'none'}}>31st of October.</p>
					</li>
                    <li className="faq__item " data-aos="fade-up" onClick={() => handleToggle('5')}>
						<p className="faq__item-head">Is there a limit?{toggle === '5' ? <span className="faq__item-endicator"></span> : <span className="faq__item-indicator"></span>}</p>
						<p className="faq__item-content" style={toggle === '5' ? {display: 'block'} : {display: 'none'}}>There is no limit on the amount of NFTs you can mint.</p>
					</li>
                    <li className="faq__item " data-aos="fade-up" onClick={() => handleToggle('6')}>
						<p className="faq__item-head">Do I own the goat after the purchase?{toggle === '6' ? <span className="faq__item-endicator"></span> : <span className="faq__item-indicator"></span>}</p>
						<p className="faq__item-content" style={toggle === '6' ? {display: 'block'} : {display: 'none'}}>Full intellectual property will be transferred to the buyer.</p>
					</li>
                    <li className="faq__item " data-aos="fade-up" onClick={() => handleToggle('7')}>
						<p className="faq__item-head">How many attributes will be in your collection?{toggle === '7' ? <span className="faq__item-endicator"></span> : <span className="faq__item-indicator"></span>}</p>
						<p className="faq__item-content" style={toggle === '7' ? {display: 'block'} : {display: 'none'}}>We have 220 unique attributes that each represent someone in the crypto community. </p>
					</li>
                    <li className="faq__item " data-aos="fade-up" onClick={() => handleToggle('8')}>
						<p className="faq__item-head">Will there be a rarity chart?{toggle === '8' ? <span className="faq__item-endicator"></span> : <span className="faq__item-indicator"></span>}</p>
						<p className="faq__item-content" style={toggle === '8' ? {display: 'block'} : {display: 'none'}}>Yes, the rarity chart will become available straight after minting on our discord and shortly after on HowRare.is.</p>
					</li>
                    <li className="faq__item " data-aos="fade-up" onClick={() => handleToggle('9')}>
						<p className="faq__item-head">Are there Royalties for Secondary Market Sales?{toggle === '9' ? <span className="faq__item-endicator"></span> : <span className="faq__item-indicator"></span>}</p>
						<p className="faq__item-content" style={toggle === '9' ? {display: 'block'} : {display: 'none'}}>Royalties are set to 4% of the secondary sales. We would use this to provide our community with future developments according to our Roadmap.</p>
					</li>
				</ul>
            </div>
        </div>
    );
};

export default Faq;