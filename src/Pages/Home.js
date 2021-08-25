import React from 'react'
import HomeInfo from './HomeInfo';
import AboutSection from './AboutSection';
import Testimonalsection from './Testimonalsection';

function Home(){
    return(
        <div>
           <HomeInfo/>
           <AboutSection/>
           <Testimonalsection/>
        </div>
    );
}

export default Home