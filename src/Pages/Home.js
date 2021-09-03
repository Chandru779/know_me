import React from 'react'
import Printdate from './Printdate';
import HomeInfo from './HomeInfo';
import AboutSection from './AboutSection';
import Testimonalsection from './Testimonalsection';


function Home(){
    return(
        <div>
           <Printdate />
           <HomeInfo />
           <AboutSection />
           <Testimonalsection />
           
        </div>
    );
}

export default Home