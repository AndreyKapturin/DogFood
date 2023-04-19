import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import data from "./data/data.json"
function App() {
  return (
    <div className='app'>
      <Header />
      <Main cards={data} />
      <Footer />
    </div>
  );
}

export default App;
