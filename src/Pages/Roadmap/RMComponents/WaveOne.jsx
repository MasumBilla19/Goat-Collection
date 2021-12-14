import React from 'react';
import '../Allcss/WaveOne.css';

const waveContents1 = [
    {
        subTitle: 'The arrival of the Goats',
        description: '5055 Goats will imprint the G.O.A.T.s of our generation on the Solana Blockchain forever.'
    },
    {
        subTitle: 'Russian Doll Collectible',
        description: 'Everyone who has participated in the minting phase will receive a special Russian Doll Collectible. They are a set of cute dolls of decreasing size that go one inside the other. With every single stage of our roadmap, a new doll will be added to your collection until you will have a full set.'
    },
    {
        subTitle: 'Help Children',
        description: 'Everyone has to have a chance to learn. Where would WE be without education?'
    },
    {
        subTitle: 'Rarity Reveal',
        description: 'Find out the rarity of your Goat on HowRare.Is . Anyways, it’s priceless!'
    },
];

const WaveOne = () => {

    return (
        <div className='roadmap_wave1'>
            <div className="container">
                <h2 className='roadmapWave1_title' data-aos="fade-right" data-aos-delay="400">Stage 1</h2>
                
                {
                    waveContents1.map(content => 
                        <div className="roadmapWave1_contentBlock" data-aos="fade-up">
                            <h3 className="roadmapWave1_subTitle">{content.subTitle}</h3>
                            <p className="roadmapWave1_text">{content.description}</p>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default WaveOne;