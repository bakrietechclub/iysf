import './App.css';
import { Routes, Route } from 'react-router-dom';
// Pages
import Landing from './Pages/Landing';
// Components
import NavigationBCF from './Components/NavigationBCF';
import Navigation from './Components/Navigation';
import Footer from './Components/Footer';
import Speakers from './Pages/Speakers';

function App() {
  return (
    <>
      <header>
        <NavigationBCF />
      </header>
      <Navigation />
      <main>
        <Routes>
          <Route index element={<Landing />} />
          <Route path='speakers' element={<Speakers />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
