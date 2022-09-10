import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, About, Contact } from './pages/index';
import { Header, Footer } from './components/index';
function App() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
