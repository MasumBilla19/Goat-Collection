import React from 'react';
import { Link } from 'react-router-dom';
import goat from '../../../images/welcome-goat.png';
import '../AllCss/Welcome.css';

const WelCome = () => {
    return (
        <div className='welcome' id="overview">
            <img src={goat} alt="" className='welcomeImg' />

            <div className="container">
                <div className="welcomeInner">
                    <h2 className="welcomeTitle" data-aos="fade-up">WELCOME</h2>

                    <div className="welcomeText" data-aos="fade-up">
                        <p>
                            <span style={{verticalAlign: 'inherit'}}>
                                <span style={{verticalAlign: 'inherit'}}>
                                    <span style={{verticalAlign: 'inherit'}}>
                                        <span style={{verticalAlign: 'inherit'}}>
                                            <span style={{verticalAlign: 'inherit'}}>
                                                <span style={{verticalAlign: 'inherit'}}>
                                                    <span style={{verticalAlign: 'inherit'}}>
                                                        <span style={{verticalAlign: 'inherit'}}>We are a 3D high-quality collection that is inspired by the crypto leaders of the New World. </span>
                                                    </span>
                                                </span>
                                            </span>
                                        </span>
                                    </span>
                                </span>
                                <span style={{verticalAlign: 'inherit'}}>
                                    <span style={{verticalAlign: 'inherit'}}>
                                        <span style={{verticalAlign: 'inherit'}}>
                                            <span style={{verticalAlign: 'inherit'}}>
                                                <span style={{verticalAlign: 'inherit'}}>
                                                    <span style={{verticalAlign: 'inherit'}}>
                                                        <span style={{verticalAlign: 'inherit'}}>Our collection consists of 5055 unique GOATs ready to dominate the Solana blockchain world. </span>
                                                    </span>
                                                </span>
                                            </span>
                                        </span>
                                    </span>
                                </span>
                                <span style={{verticalAlign: 'inherit'}}>
                                    <span style={{verticalAlign: 'inherit'}}>
                                        <span style={{verticalAlign: 'inherit'}}>
                                            <span style={{verticalAlign: 'inherit'}}>
                                                <span style={{verticalAlign: 'inherit'}}>
                                                    <span style={{verticalAlign: 'inherit'}}>
                                                        <span style={{verticalAlign: 'inherit'}}>Just as the crypto leaders have done.</span>
                                                    </span>
                                                </span>
                                            </span>
                                        </span>
                                    </span>
                                </span>
                            </span>
                        </p>

                        <p>
                            <span style={{verticalAlign: 'inherit'}}>
                                <span style={{verticalAlign: 'inherit'}}>
                                    <span style={{verticalAlign: 'inherit'}}>
                                        <span style={{verticalAlign: 'inherit'}}>
                                            <span style={{verticalAlign: 'inherit'}}>
                                                <span style={{verticalAlign: 'inherit'}}>
                                                    <span style={{verticalAlign: 'inherit'}}>
                                                        <span style={{verticalAlign: 'inherit'}}>We will put everything we have into making this collection better and better for our community. </span>
                                                    </span>
                                                </span>
                                            </span>
                                        </span>
                                    </span>
                                </span>
                                <span style={{verticalAlign: 'inherit'}}>
                                    <span style={{verticalAlign: 'inherit'}}>
                                        <span style={{verticalAlign: 'inherit'}}>
                                            <span style={{verticalAlign: 'inherit'}}>
                                                <span style={{verticalAlign: 'inherit'}}>
                                                    <span style={{verticalAlign: 'inherit'}}>
                                                        <span style={{verticalAlign: 'inherit'}}>The roadmap justifies our intentions and will show you how far we are willing to go.</span>
                                                    </span>
                                                </span>
                                            </span>
                                        </span>
                                    </span>
                                </span>
                            </span>
                        </p>

                        <p>
                            <span style={{verticalAlign: 'inherit'}}>
                                <span style={{verticalAlign: 'inherit'}}>
                                    <span style={{verticalAlign: 'inherit'}}>
                                        <span style={{verticalAlign: 'inherit'}}>
                                            <span style={{verticalAlign: 'inherit'}}>
                                                <span style={{verticalAlign: 'inherit'}}>
                                                    <span style={{verticalAlign: 'inherit'}}>
                                                        <span style={{verticalAlign: 'inherit'}}>220 unique attributes have been crafted through cooperation with some of our favorite influencers. </span>
                                                    </span>
                                                </span>
                                            </span>
                                        </span>
                                    </span>
                                </span>
                                <span style={{verticalAlign: 'inherit'}}>
                                    <span style={{verticalAlign: 'inherit'}}>
                                        <span style={{verticalAlign: 'inherit'}}>
                                            <span style={{verticalAlign: 'inherit'}}>
                                                <span style={{verticalAlign: 'inherit'}}>
                                                    <span style={{verticalAlign: 'inherit'}}>
                                                        <span style={{verticalAlign: 'inherit'}}>Each attribute will be a signature of someone everyone knows and follows.</span>
                                                    </span>
                                                </span>
                                            </span>
                                        </span>
                                    </span>
                                </span>
                            </span>
                        </p>
                    </div>

                    <div className="welcome_btnWrapper" data-aos="fade-up">
                        <Link to="https://discord.gg/goatcollection" className="btn welcome_btn">Join Us</Link>
                    </div>

                    <div className="welcome_numbers">
                        <p className="welcome_number" data-aos="fade-up">To be minted <br /> <span id='counter-1'>5,055</span></p>
                    
                        <p className="welcome_number" data-aos="fade-up">Attributes <br /> <span id='counter-2'>220</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WelCome;