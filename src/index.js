import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Products from './components/products';
import Navbar from './components/nav-bar';
import Footer from './components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    <div>
        <Navbar />
        <Products />
        <Footer/>
    </div>,
    document.getElementById('root')
);


