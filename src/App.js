import React from "react";
import "./App.css";
import { Homepage, Navbar,OrderConfirmation, NoMatch, Products, Featured, New, Users, UserDetails, Admin } from "./components";
import { Route, Routes } from "react-router-dom";
const LazyAbout = React.lazy(()=> import('./components/About'));

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Homepage />} />
        <Route path="about" exact element={<React.Suspense fallback='Loading ...'><LazyAbout /></React.Suspense>} />
        <Route path="order-summary" element={<OrderConfirmation />}/>
        <Route path="products" element={<Products />} >
          <Route index element={<Featured />}/>
          <Route path="featured" element={<Featured />}/>
          <Route path="new" element={<New />}/>
        </Route>
        <Route path="users" element={<Users />}> 
        <Route path=":id" element={<UserDetails />}/>
        <Route path="admin" element={<Admin />}/>
        </Route>
        <Route path='*' element={<NoMatch />} />
      </Routes>
    </>
  );
}

export default App;
