import React from 'react';
import Navbar from './components/layout/Navbar.jsx';
import Header from './components/layout/Header.jsx';
import AboutMe from './components/sections/AboutMe.jsx';
import Projects from './components/sections/Projects.jsx';
import Footer from './components/layout/Footer.jsx';
import Experience from "./components/sections/Experience.jsx";
import Contact from "./components/sections/Contact.jsx";

const App = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar/>
            <Header/>
            <main className="flex-grow">
                <AboutMe/>
                <Projects/>
                <Experience/>
                <Contact/>
            </main>
            <Footer/>
        </div>
    );
};

export default App;
