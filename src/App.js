import "./App.css";
import { Homepage, About, Navbar,OrderConfirmation, NoMatch, Products, Featured, New, Users, UserDetails, Admin } from "./components";
import { Route, Routes } from "react-router-dom";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Homepage />} />
        <Route path="about" exact element={<About />} />
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
    </Fragment>
  );
}

export default App;
