import React from 'react';
import '../AllCss/Bar.css';
import bar from '../../../images/bar-img.png';
import open from '../../../images/doors-opened.png';
import close from '../../../images/doors-closed.png';

const Bar = () => {
    return (
        <div className='bar' id="bar">
            <div className="container">
                <div className="bar_topImg-Wrapper" data-aos="fade-up">
                    <img src={bar} alt="" className="bar_topImg" />
                </div>

                <div className="bar_doorsImg" data-aos="fade-up">
                    <img src={open} alt="" className="opened" />
                    <img src={close} alt="" className="closed" />
                </div>

                <div className="bar_text" data-aos="fade-up">
                    <p className="bar_textParagraph">
                        <span style={{verticalAlign: 'inherit'}}>
                            <span style={{verticalAlign: 'inherit'}}>
                                <span style={{verticalAlign: 'inherit'}}>
                                    <span style={{verticalAlign: 'inherit'}}>
                                        <span style={{verticalAlign: 'inherit'}}>
                                            <span style={{verticalAlign: 'inherit'}}>
                                                <span style={{verticalAlign: 'inherit'}}>
                                                    <span style={{verticalAlign: 'inherit'}}>After the mint, all goalders are welcome to visit the GOAT Bar (n), where they could communicate and have some gre-ee-at time. </span>
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
                                                    <span style={{verticalAlign: 'inherit'}}>In our Bar (n), the Goalders are the VIP’s, so they have access to such special features as attending weekly DJ sessions and live chatting with the real GOATs What is more, the Goalders can participate in daily activities and be the first ones to see the exclusive information as to future plannings and more.</span>
                                                </span>
                                            </span>
                                        </span>
                                    </span>
                                </span>
                            </span>
                        </span>
                    </p>

                    <p className="bar_textSubtitle">
                        <strong>
                            <span style={{verticalAlign: 'inherit'}}>
                                <span style={{verticalAlign: 'inherit'}}>
                                    <span style={{verticalAlign: 'inherit'}}>
                                        <span style={{verticalAlign: 'inherit'}}>
                                            <span style={{verticalAlign: 'inherit'}}>
                                                <span style={{verticalAlign: 'inherit'}}>
                                                    <span style={{verticalAlign: 'inherit'}}>
                                                        <span style={{verticalAlign: 'inherit'}}>Battle of the GOATs</span>
                                                    </span>
                                                </span>
                                            </span>
                                        </span>
                                    </span>
                                </span>
                            </span>
                        </strong>
                    </p>

                    <div className="bar_textParagraph">
                        <span style={{verticalAlign: 'inherit'}}>
                            <span style={{verticalAlign: 'inherit'}}>
                                <span style={{verticalAlign: 'inherit'}}>
                                    <span style={{verticalAlign: 'inherit'}}>
                                        <span style={{verticalAlign: 'inherit'}}>
                                            <span style={{verticalAlign: 'inherit'}}>
                                                <span style={{verticalAlign: 'inherit'}}>
                                                    <span style={{verticalAlign: 'inherit'}}>Here, every week your Goat will be evaluated, and the process will be based on the influencers’ attributes that the Goat possesses. </span>
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
                                                    <span style={{verticalAlign: 'inherit'}}>Your Goat will be judged based on various factors as fame and activity of the influencer, their news appearances, or their new projects. </span>
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
                                                    <span style={{verticalAlign: 'inherit'}}>The top 5 in the leaderboard will receive prize money accumulated from the royalties made for the current week.</span>
                                                </span>
                                            </span>
                                        </span>
                                    </span>
                                </span>
                            </span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bar;