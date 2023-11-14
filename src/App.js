import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import * as Login from './components/Login';
import * as HelloUser from './components/HelloUser';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
// import AddProduct from './component/AddProduct';

const App = () => {
  const [child, setChild] = useState(<h3>App is loading</h3>)
  const [loaded, setLoaded] = useState(false);

  
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://static.freshdev.io/fdk/2.0/assets/fresh_client.js';
    script.addEventListener('load', () => setLoaded(true));
    script.defer = true;
    document.head.appendChild(script);
  }, []);

  useEffect(() => {
    if (loaded) return
    app.initialized().then((client) => {
      setChild((<HelloUser client={client} />))
    })
  }, [loaded])
  return (
    <div className="app-container">
      <div>
        {child}
      </div>
      <Router>
        <Routes>
          <Route path="/" element={<Login />}  exact/>
          <Route path="/login" element={<Login />} exact/>
          <Route path="/products" element={<ProductList/>} exact/>
          <Route path="/products/:productId" element={<ProductDetails/>} exact/>
          {/* <Route path="/add" element={<AddProduct/>} exact/> */}
        </Routes>
      </Router>
    </div>
  );
};

export default App;
