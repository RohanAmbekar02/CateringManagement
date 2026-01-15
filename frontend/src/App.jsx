import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';

import Dashboard from './Pages/dashboard/dashboard';
import Order from './Pages/Order/details';
import Login from './Pages/Auth/Login';
import ItemDetails from './Pages/Item/item-details';
import Customer from './Pages/Customer/customer-details';
import Reviews from './Pages/Order/review';

function App() {
  return (
    <BrowserRouter>
      <Routes>

         <Route path="/" element={<Login />} />
  
        <Route element={<Layout />}>
           <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/item" element={<ItemDetails />} />
        <Route path="/order" element={<Order />} />
        <Route path="/customer" element={<Customer />} />
        <Route path="/review" element={<Reviews />} />
        </Route>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;