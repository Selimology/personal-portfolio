import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, About } from './pages/index';
import { Header, Footer } from './components/index';

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col h-screen">
        <Header />
        <div className="flex-grow">
          <Routes>
            <Route path="" element={<Home />} />
            <Route path="about" element={<About />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
