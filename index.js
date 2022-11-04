import React from 'react';
import ReactDOM from 'react-dom/';

import Navbar from "./Navbar"
import Footer from "./Footer"
import Main from "./Main"


function App() {
  return (
    <>
    <Navbar />
    <Main />
    <Footer />
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>); 