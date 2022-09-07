import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, About } from './pages/index';
import { Header } from './components/index';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
