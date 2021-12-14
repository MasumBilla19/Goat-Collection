import React from 'react';
import Header from './RMComponents/Header';
import Roadmap2 from './RMComponents/Roadmap2';
import WaveOne from './RMComponents/WaveOne';
import WaveThree from './RMComponents/WaveThree';
import WaveTwo from './RMComponents/WaveTwo';
import Footer from '../../Components/Footer/Footer';

const RoadMapPage = () => {
    return (
        <div style={{overflowX: 'hidden', background: 'linear-gradient(194.58deg,#ab0000 -7.74%,rgba(255,160,18,0) 87.36%),linear-gradient(14.14deg,rgba(12,140,1,.7) 0,rgba(242,236,74,0) 103.47%)'}}>
            <Header />
            <WaveOne />
            <WaveTwo />
            <WaveThree />
            <Roadmap2 />
            <Footer />
        </div>
    );
};

export default RoadMapPage;