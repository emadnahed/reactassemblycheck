import React from "react"
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


ReactDOM.render(App(), document.getElementById("root"));

// const rootElement = document.getElementById('root');
// const root = React.createRoot(rootElement);

// 👇️ if you use TypeScript, add non-null (!) assertion operator
// const root = createRoot(rootElement!);
