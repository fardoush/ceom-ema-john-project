import React from 'react';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import Banner from './components/Banner/Banner';

const App = () => {
  return (
    <div>
      <Header/>
      <Banner/>
      <Shop></Shop>
    </div>
  );
};

export default App;