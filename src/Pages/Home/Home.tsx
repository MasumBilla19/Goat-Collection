import React from 'react';
import Footer from '../../Components/Footer/Footer';
import Bar from './AllHero/Bar';
import Faq from './AllHero/Faq';
import Hero from './AllHero/Hero';
import HeroMenu from './AllHero/HeroMenu';
import Team from './AllHero/Team';
import WelCome from './AllHero/WelCome';

const Home = () => {
    return (
        <div className='home' style={{background: 'linear-gradient(180.3deg,#172057 4.72%,rgba(88,123,134,0) 22.91%),linear-gradient(92.61deg,rgba(15,0,193,.6) .85%,rgba(228,203,255,.6) 113.57%),linear-gradient(360deg,#00dc09 21.28%,rgba(255,97,154,0) 43.23%),linear-gradient(190.33deg,rgba(155,158,0,.9) 28.93%,rgba(190,3,70,.9) 66.17%)'}}>
            {/* <HeroMenu /> */}
            <Hero />
            <WelCome />
            <Bar />
            <Faq />
            <Team />
            <Footer />
        </div>
    );
};

export default Home;