import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <main className="pt-20 px-6">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/category" element={<h1 className="text-2xl font-bold">Category Page</h1>} />
          <Route path="/collections" element={<h1 className="text-2xl font-bold">Collections Page</h1>} />
          <Route path="/contact" element={<h1 className="text-2xl font-bold">Contact Page</h1>} />
          <Route path="/wishlist" element={<h1 className="text-2xl font-bold">Wishlist Page</h1>} />
          <Route path="/cart" element={<h1 className="text-2xl font-bold">Cart Page</h1>} />
          <Route path="/profile" element={<h1 className="text-2xl font-bold">Profile Page</h1>} />
        </Routes>
        <Footer />
      </main>
    </Router>
  );
}

export default App;