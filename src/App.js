import React from 'react';
import './App.css';
import NavMenu from './components/NavMenu';
import { BrowserRouter,Route,HashRouter } from 'react-router-dom';
import Home from './Pages/Home';
import Project from './Pages/Project';
import About from './Pages/About';
import Contact from './Pages/Contact';  



function App() {
  return (
    <div className="App">
     
     <BrowserRouter>
        <NavMenu/>

        <HashRouter>
          <Route path="/About">
            <About/>
          </Route>

          <Route path="/Project">
           <Project/>
          </Route>

          <Route path="/Contact"> 
           <Contact/>   
          </Route>

          <Route path="/"> 
            <Home/>  
          </Route>
        </HashRouter>

     </BrowserRouter>
    </div>
  );
}

export default App;
