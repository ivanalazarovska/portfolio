import Navbar from "./components/Navbar";
import Box from '@mui/material/Box';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import CursorGlow from "./components/CursorGlow"

function App() {
    return (
        <>
        <CursorGlow />
        <Box sx={{ backgroundColor: "#0f172a", minHeight: "100vh", color: "white" }}>
            <Navbar />
            <HeroSection />
            <AboutMe />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
        </Box>
        </>
    );
}

export default App;