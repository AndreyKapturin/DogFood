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
  const [user, setUser] = useState({})

  useEffect(() => {
    api.getUserInfo().then(data => setUser(data))
  }, [])

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

  const changeLike = (productID, wasLiked) => {
    api.swithLike(productID, wasLiked).then(res => {
      const newProducts = products.map(product => product._id === productID ? res : product);
      setProducts([...newProducts])
    })
  }

  return (
    <div className='app'>
      <Header setSearch={setSearch} />
      <Main cards={products} search={search} setProducts={setProducts} user={user} changeLike={changeLike}/>
      <Footer />
    </div>
  );
}

export default App;
