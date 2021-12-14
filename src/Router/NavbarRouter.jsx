import React, { useEffect } from 'react';
import { Outlet,Routes, Route,useLocation } from 'react-router-dom';
import Home from '../Pages/Home/Home';

import RoadMapPage from '../Pages/Roadmap/RoadmapPage';

const NavbarRouter = () => {
    const {pathname} = useLocation()
    useEffect(()=> {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        })

    },[pathname])
    
    return (
        <Routes>
            <Route path="/" element={<NavbarPages/>}>
                <Route path="/" element={<Home />} />
                <Route path="/roadmap" element={<RoadMapPage/>}/>
            </Route>
            
        </Routes>
    );
};


const NavbarPages = () => {
    return <Outlet/>
}


export default NavbarRouter;