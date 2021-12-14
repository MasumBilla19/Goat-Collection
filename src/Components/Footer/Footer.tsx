import React from 'react';
import { Link } from 'react-router-dom';
import tw from '../../images/icon-tw.svg';
import dc from '../../images/icon-dc.svg';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer'>
            <div className="container">
                <div className="footer_row">
                    <div className="footer_copyright" data-aos="fade-right" data-aos-anchor-placement="top-bottom">Copyright © 2021 G.O.A.T. NFT Collection</div>
                
                    <div className="footer_socials" data-aos="fade-left" data-aos-anchor-placement="top-bottom">
                        <Link to="https://twitter.com/GOAT_SOLNFT" target="_blank" className="footer_socialLink extra">
                            <img src={tw} alt="" className="footer_socialIcon" />
                        </Link>

                        <Link to="https://discord.gg/goatcollection" target="_blank" className="footer_socialLink">
                            <img src={dc} alt="" className="footer_socialIcon" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;