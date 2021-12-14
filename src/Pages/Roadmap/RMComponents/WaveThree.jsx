import React from 'react';
import '../Allcss/WaveThree.css';
import wave3 from "../../../images/wave3.png";

const waveContents3 = [
    {
        subTitle: 'Memebers Only Merch',
        description: 'Exclusive limited supply of hoodies, t-shirts and hats. Golders will have an opportunity to obtain a unique personalized action figure of their beloved Goats. Love it and take care of it as if it is your own pet.'
    },
    {
        subTitle: 'DAO',
        description: 'Establishment of a DAO with all of our Golders to ensure rational and favorable outcomes for the future of the Goats.'
    },
];

const WaveThree = () => {
    return (
        <div className='roadmap_wave3'>
            <div className="roadmapWave3_imgWrapper">
                <img src={wave3} alt="" className="roadmapWave3_img" data-aos="fade-right" data-aos-anchor-placement="top-bottom" data-aos-offset="-400" />
            </div>

            <div className="container">
                <h2 className="roadmapWave3_title" data-aos="fade-right">Stage 3</h2>
            
                {
                    waveContents3.map(content => 
                        <div className="roadmapWave3_contentBlock" data-aos="fade-up">
                            <h3 className="roadmapWave3_subTitle">{content.subTitle}</h3>
                            <p className="roadmapWave3_text">{content.description}</p>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default WaveThree;