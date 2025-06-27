import logo from './logo.svg';
import './App.css';
import Homepage from './pages/Homepage';
import Weatherpage from './pages/Weatherpage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/weather/:city" element={<Weatherpage />} />
      </Routes>
    </Router>
  );
}

export default App;
