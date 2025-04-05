import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Projeto from './pages/ProjetoPage';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <main className="content">
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projeto" element={<Projeto />} />
          </Routes>
        </main>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App; 