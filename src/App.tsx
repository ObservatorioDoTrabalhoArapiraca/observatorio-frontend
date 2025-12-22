import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Projeto from './pages/Project';
import Home from './pages/Home';
import {Tabelas} from './pages/DataPage';
import RelatoriosPage from './pages/RelatoriosPage';
import DataTablePage from '@/pages/tabelas/DataTablePage';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Navigation />
        <main>
          {/* retirar os main de todas as páginas */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project" element={<Projeto />} />
            {/* <Route path="/tabelas" element={<DataTablePage />} /> */}
            <Route path="/tabelas/:category" element={<DataTablePage />} />
            <Route path="/relatorio" element={<RelatoriosPage />} />
            <Route path="/ajuda" element={<div>Ajuda</div>} />
          </Routes>
        </main>
      </BrowserRouter>
      <Footer />
    </div>
  )
}

export default App; 