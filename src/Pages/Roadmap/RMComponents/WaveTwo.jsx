import React from 'react';
import '../Allcss/WaveTwo.css';
import wave2 from "../../../Images/wave2.png";

const waveContents2 = [
    {
        subTitle: 'Barn Opening!',
        description: 'Our Barn will open its doors. Platform with weekly DJ sessions live chats with the real G.O.A.T.s, daily activities, Goat family photos and future plannings will be exclusively available to the Golders.'
    },
    {
        subTitle: 'Battle of The G.O.A.T.s',
        description: "Each week a dependent valuation of your Goat will be made based on the influencers' attributes that your Goat possesses. The Goat will be judged based on factors like activity, fame, news appearances, or any new projects of their influencers. The top 5 in the leaderboard will receive prize money accumulated from the royalties made for the current week."
    },
    {
        subTitle: 'Help Children 2.0',
        description: 'An additional 70 Sol will be allotted to Children International. It’s never enough to support children in need!'
    },
    {
        subTitle: 'Lucky Ten',
        description: '10 lucky Golders will enjoy 0.1 sol for each day they HODL their Goat. Their sol will accumulate until the moment they stop loving their Goat. They won’t know they are the lucky ones until they sell. Once they receive their HODLing prize, the other Golder will be selected. The amount of Sol can vary based on the weekly volume traded.'
    },
    {
        subTitle: 'Volume Up',
        description: 'For every 10K Sol of traded volume, three lucky Golders will receive a floor price of a goat with their rarest trait.'
    },
    {
        subTitle: 'Top Up',
        description: '5% of the royalties will be used to top up our Goaty Bank every week.'
    },
    {
        subTitle: 'Sweep & Swap',
        description: '20% of the royalties will be used to support a concrete floor price. All listings that fluctuate downwards greater than 10% from the floor price will be swept. They will then be added to a pool in our Barn. Golders can select any Goat from the pool and swap it with their own Goat.'
    },
];

const WaveTwo = () => {
    return (
        <div className='roadmap_wave2'>
            <div className="container">
                <div className="roadmapWave2_imgWrapper">
                    <img src={wave2} alt="" className="roadmapWave2_img" data-aos="fade-left" data-aos-anchor-placement="top-bottom" data-aos-offset="-400" />
                </div>

                <h2 className="roadmapWave2_title" data-aos="fade-left">Stage 2</h2>
            
                {
                    waveContents2.map(content => 
                        <div className="roadmapWave2_contentBlock" data-aos="fade-up">
                            <h3 className="roadmapWave2_subTitle">{content.subTitle}</h3>
                            <p className="roadmapWave2_text">{content.description}</p>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default WaveTwo;