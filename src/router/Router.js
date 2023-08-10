import React from 'react';
import { BrowserRouter , Route, 
  //Switch react-router v6  use 'Routes' instead of 'Switch'
Routes} from 'react-router-dom';
import Home from '../components/page/home/Home.js';
import Menu from '../components/page/menu/Menu.js';
import Order from '../components/page/order/Order.js';
import Login from '../components/user/login/Login.js';
import Register from '../components/user/register/Register.js';
import OrderHistory from '../components/user/orderhistory/OrderHistory.js';
import Profile from '../components/user/profile/Profile.js';
import About from '../components/page/about/About.js';
import Cart from '../components/page/cart/Cart'

function Router() {
  
    return (
      <div>
        <BrowserRouter >
          {/* <Switch> */}
          <Routes>
          {/* In V6, you can't use the component prop anymore. It was replaced in favor of element: */}
            <Route exact path="/"  element={<Home />} ></Route>
            <Route exact path="/menu" element={<Menu />}></Route>
            <Route exact path='/order/:id' element={<Order />}></Route>
            <Route exact path="/login" element={<Login />}></Route>
            <Route exact path="/register" element={<Register />}></Route>
            <Route exact path="/history" element={<OrderHistory  />}></Route>
            <Route exact path='/profile' element={<Profile  />}></Route>
            <Route exact path='/about' element={<About />}></Route>
            <Route exact path="/cart" element={<Cart />}></Route>
          </ Routes>
          {/* </Switch> */}
        </BrowserRouter>
      </div>
    )
  
}

export default Router;


