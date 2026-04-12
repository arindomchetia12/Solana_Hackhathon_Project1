import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import NotFound from "./pages/NotFound.jsx";
import TransitionEffect from "./components/TransitionEffect.jsx";
import { ReactLenis } from '@studio-freight/react-lenis';

export default function App() {
    return (
        <ReactLenis root>
            <Router>
                <TransitionEffect />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/about" element={<About />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Router>
        </ReactLenis>
    );
}
