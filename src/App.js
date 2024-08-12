import './App.css';
import { Routes, Route } from 'react-router-dom';
import React, { useEffect } from 'react';
// Pages
import Landing from './Pages/Landing';
// Components
import NavigationBCF from './Components/NavigationBCF';
import Navigation from './Components/Navigation';
import Footer from './Components/Footer';
import Speakers from './Pages/Speakers';
import Partners from './Pages/Partners';

import { db, analytics } from './utils/firebase-config';
import { logEvent } from 'firebase/analytics';

function App() {

  useEffect(() => {
    logEvent(analytics, 'notification_received');
  }, []);

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
          <Route path='partners' element={<Partners />} />
        </Routes>
      </main>
      <footer>
        <Footer db={db} />
      </footer>
    </>
  );
}

export default App;
