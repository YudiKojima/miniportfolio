import { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Experience from "./pages/Experience";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

function App() {

    const [theme, setTheme] = useState('Dark Mode')
    
    const themeToggler = () => {
          theme === 'Light Mode' ? setTheme('Dark Mode') : setTheme('Light Mode');
    } 

    return (
        <Router>
            <Header theme={theme} onClick={() => themeToggler()}/>
                <div>
                    <Routes>
                    <Route path="/" element={<Home theme={theme}/>}/>
                    <Route path="/about" element={<About theme={theme}/>}/>
                    <Route path="/experience" element={<Experience theme={theme}/>}/>
                    <Route path="/projects" element={<Projects theme={theme}/>}/>
                    <Route path="/contact" element={<Contact theme={theme}/>}/>
                    </Routes>
                </div>
            <Footer />
        </Router>
    );
}

export default App;
