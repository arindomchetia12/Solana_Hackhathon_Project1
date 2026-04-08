import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard.jsx";
import Home from "./pages/Home.jsx";

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </Router>
    );
}

// src/App.jsx

// Option A: Using inline styles
const backgroundStyle = {
  minHeight: '100vh',
  color: 'white',
  backgroundColor: '#000',
  backgroundImage: 'radial-gradient(circle at top, rgba(112, 0, 255, 0.15) 0%, #000 70%)',
};

function App() {
  return (
    <div style={backgroundStyle}>
      {/* Existing content: 'Built on Solana', buttons, etc. */}
    </div>
  );
}
function App() {
  return (
    <div className="bg-black">
       {/* Content */}
    </div>
  );
}

export default App; // Only keep this if the function above DOES NOT have 'export default'