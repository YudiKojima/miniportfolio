import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

import "./App.css";

function App() {
    return (
        <Router>
            <Header />
                <div className="App">
                    <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/about" element={<About />}/>
                    <Route path="/experience" element={<Experience />}/>
                    <Route path="/projects" element={<Projects />}/>
                    <Route path="/contact" element={<Contact />}/>
                    </Routes>
                </div>
            <Footer />
        </Router>
    );
}

export default App;
