import React from 'react';
import Header from './components/Header.jsx';
import HeroBanner from './components/HeroBanner.jsx';

function App() {
  return (
    <div>
      <Header />
      <HeroBanner />
      <main style={{ padding: '40px', textAlign: 'center' }}>
        <h1>Testing the Header Component</h1>
        <p>This is where your homepage content will go.</p>
      </main>
    </div>
  );
}

export default App;
