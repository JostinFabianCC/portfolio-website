import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Experience from "./components/Experience.jsx";

const App = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar/>
            <Header/>
            <main className="flex-grow">
                <AboutMe/>
                <Projects/>
                <Experience/>
            </main>
            <Footer/>
        </div>
    );
};

export default App;
