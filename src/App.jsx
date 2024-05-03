


import { Kid } from "./components/bottom/Kids";
import Men from "./components/bottom/Men";
import { Women } from "./components/bottom/Women";
import Cart from "./components/search-bar/Cart";
import MainPage from "./pages";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";



function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />}/>
          <Route path="/men" element={<Men/>}/>
          <Route path="/kid" element={<Kid />}/>
          <Route path="/women" element={<Women />}/>
          <Route path="/cart"  element={<Cart/>} />
        </Routes>
      </Router>
    </div>
  );
} 

export default App;



// import React, { useState } from 'react';

// function ProductListing({ products, addToCart }) {
//   return (
//     <div>
//       {products.map(product => (
//         <div key={product.id}>
//           <h3>{product.name}</h3>
//           <p>{product.price}</p>
//           <button onClick={() => addToCart(product)}>Add to Cart</button>
//         </div>
//       ))}
//     </div>
//   );
// }

// function Cart({ cartItems }) {
//   return (
//     <div>
//       <h2>Cart</h2>
//       <ul>
//         {cartItems.map(item => (
//           <li key={item.id}>
//             {item.name} - {item.quantity} x {item.price}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// function App() {
//   const [cartItems, setCartItems] = useState([]);

//   const addToCart = (product) => {
//     const existingItem = cartItems.find(item => item.id === product.id);
//     if (existingItem) {
//       setCartItems(cartItems.map(item =>
//         item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
//       ));
//     } else {
//       setCartItems([...cartItems, { ...product, quantity: 1 }]);
//     }
//   };

//   const products = [
//     { id: 1, name: 'Product 1', price: 10 },
//     { id: 2, name: 'Product 2', price: 20 },
//     { id: 3, name: 'Product 3', price: 30 },
//   ];

//   return (
//     <div>
//       <ProductListing products={products} addToCart={addToCart} />
//       <Cart cartItems={cartItems} />
//     </div>
//   );
// }

//export default App;
