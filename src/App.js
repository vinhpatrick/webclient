import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/configureStore';
import Home from "./components/Home";
import ProductDetail from "./components/ProductDetail";
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/product/" exact element={<ProductDetail />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
