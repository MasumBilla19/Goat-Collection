import React from 'react';
import logo from '../../../images/logo.png';
import hero from '../../../images/hero-img.png';
import '../AllCss/Hero.css';

const Hero = () => {
    return (
        <div className='hero'>
            <div className="container">
                <div className="heroHeader" data-aos="fade-up">
                    <button className="heroHeader_menuBtn">
                        <spnn></spnn>
                        <spnn></spnn>
                        <spnn></spnn>
                    </button>

                    <div className="heroHeader_logo">
                        <img className='heroHeader_logoImg' src={logo} alt="" />
                    </div>

                    <div className="heroHeader_text">
                        <h1 className="heroHeader_title">G.O.A.T. COLLECTION</h1>
                        <p className="heroHeader_desc">Exclusively on Solana</p>
                    </div>
                </div>

                <div className="heroRow" data-aos="fade-left" data-aos-delay="700">
                    <div className="heroImage">
                        <img src={hero} alt="" />

                        <div className="heroQuote">
                            <div className="heroQuote_text">The goat's business is none of the sheep's concern.</div>
                            <div className="heroQuote_author">- Edna Ferber</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;