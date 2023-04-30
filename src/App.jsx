import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import { api } from './api/api';
import { useEffect, useState } from 'react';

function App() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState(null)

  useEffect(() => {
    if (!search) {
      api.getProducts().then(data => { setProducts(data.products) })
    } else {
      const timer = setTimeout(() => {
        api.searchProducts(search).then(data => setProducts(data))
      }, 500);
      return () => clearTimeout(timer)
    }
  }, [search])

  return (
    <div className='app'>
      <Header setSearch={setSearch} />
      <Main cards={products} search={search} setProducts={setProducts} />
      <Footer />
    </div>
  );
}

export default App;
