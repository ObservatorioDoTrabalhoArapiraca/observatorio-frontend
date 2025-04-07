import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Projeto from './pages/ProjetoPage';
import Home from './pages/Home';
import Indicadores from './pages/DataPage';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <main className="content">
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project" element={<Projeto />} />
            <Route path="/data" element={<Indicadores />} />
          </Routes>
        </main>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App; 