import React from 'react';
import '../AllCss/Team.css';
import t1 from '../../../images/t1.png';
import t2 from '../../../images/t2.png';
import t3 from '../../../images/t3.png';
import t4 from '../../../images/t4.png';
import t5 from '../../../images/t5.png';
import t6 from '../../../images/t6.png';

const Team = () => {
    return (
        <div className='team' id="team">
            <div className="container">
                <h2 className="team_title" data-aos="fade-up">The G.O.A.T. Team</h2>

                <div className="team_list">
                    <div className="team_item" data-aos="fade-up">
                        <img src={t1} alt="" className="team_itemImg" />
                    
                        <p className="team_itemName">VincentvanGoat Founder</p>
                    </div>

                    <div className="team_item" data-aos="fade-up">
                        <img src={t2} alt="" className="team_itemImg" />
                    
                        <p className="team_itemName">JLutherGoat Design & Art</p>
                    </div>

                    <div className="team_item" data-aos="fade-up">
                        <img src={t3} alt="" className="team_itemImg" />
                    
                        <p className="team_itemName">Satyr Community Management</p>
                    </div>

                    <div className="team_item" data-aos="fade-up">
                        <img src={t4} alt="" className="team_itemImg" />
                    
                        <p className="team_itemName">100buck Marketing Management</p>
                    </div>

                    <div className="team_item" data-aos="fade-up">
                        <img src={t5} alt="" className="team_itemImg" />
                    
                        <p className="team_itemName">SlimJim Development</p>
                    </div>

                    <div className="team_item" data-aos="fade-up">
                        <img src={t6} alt="" className="team_itemImg" />
                    
                        <p className="team_itemName">Pollux Marketing Management</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;