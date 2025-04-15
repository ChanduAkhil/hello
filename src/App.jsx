import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Jobs from './pages/Jobs';
import Login from './pages/Login';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}
const footer = () => {
  return (
    <footer>
      <p>
        © {new Date().getFullYear()} KLEF Job Portal. All Rights Reserved. | <a href="/privacy">Privacy Policy</a>
      </p>
    </footer>
  );
 };
 
export default App;