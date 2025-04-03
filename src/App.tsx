import Header from './components/Header'
import Navigation from './components/Navigation';
import MainContent from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      
      <main className="content">
        <MainContent />
      </main>
      
      <Footer />
    </div>
  );
}

export default App; 