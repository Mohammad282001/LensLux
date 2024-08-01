import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Use Routes instead of Switch
import Home from './pages/Home/homePage';
import CategoryPage from './pages/Categories/categoryPage';
import ProductPage from './pages/Product/productPage';
import './App.css'
import './index.css'


function App() {
  return (
    <Router>
      <Routes> {/* Use Routes instead of Switch */}
        <Route path="/" element={<Home />} /> {/* Home route should be "/" for root */}
        <Route path="/category/:categoryType" element={<CategoryPage />} />
        <Route path="/product/:productId" element={<ProductPage />} />
      </Routes>
    </Router>
  );
}

export default App;




// import ReactDOM from "react-dom/client";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from './pages/Home/homePage'
// import CategoryPage from "./pages/Categories/categoryPage";
// import ProductPage from "./pages/Product/productPage";
// import './App.css'
// import './index.css'




// function App() {

//   return (

//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />}></Route>
//         <Route path="/catagories" element={<CategoryPage />}></Route>
//         <Route path="/ProductPage" element={<ProductPage />}></Route>
//       </Routes>
//     </BrowserRouter>

//   )
// }

// export default App

