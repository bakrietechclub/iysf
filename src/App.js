import './App.css';
import { Routes, Route } from 'react-router-dom';
// Pages
import Landing from './Pages/Landing';
// Components
import NavigationBCF from './Components/NavigationBCF';
import Navigation from './Components/Navigation';
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <header>
        <NavigationBCF />
      </header>
      <Navigation />
      <main>
        <Routes>
          <Route path='/' element={<Landing />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
