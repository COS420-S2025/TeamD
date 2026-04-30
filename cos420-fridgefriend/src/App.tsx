import React from 'react';
import { MemoryRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Login from "./pages/Login"
import Register from "./pages/Register"
import Home from "./pages/Home"
import Inventory from "./pages/Inventory"
import AddItem from "./pages/AddItem"
import ItemInfo from "./pages/ItemInfo"
import RemoveItem from "./pages/RemoveItem"
import BarcodeScanner from "./pages/BarcodeScanner"
import ExpirationCalendar from "./pages/ExpirationCalendar"
import Spending from "./pages/Spending"
import Household from "./pages/Household"
import InviteMember from "./pages/InviteMember"


function App() {
  return (
    <>
    <MemoryRouter future={{v7_startTransition: true, v7_relativeSplatPath: true}}>
      <Routes>
          <Route path="/" element ={<Login />} />
          <Route path="/register" element ={<Register setRegister={function (register: boolean): void {
            throw new Error('Function not implemented.');
          } } />} />
          <Route path="/home" element={<Home />}></Route>
          
          <Route path="/inventory" element={<Inventory />}></Route>
            <Route path="/inventory/addItem" element={<AddItem />}></Route>
            <Route path="/inventory/itemInfo" element={<ItemInfo />}></Route>
            <Route path="/inventory/removeItem" element={<RemoveItem />}></Route>
            <Route path="/inventory/barcodeScanner" element={<BarcodeScanner />}></Route>
            <Route path="/calendar" element={<ExpirationCalendar />}></Route>
            <Route path="/calendar/itemInfo" element={<ItemInfo />}></Route>
            <Route path="/spending" element={<Spending />}></Route>
            <Route path="/household" element={<Household />}></Route>
            <Route path="/household/inviteMember" element={<InviteMember />}></Route>
      </Routes>
    </MemoryRouter>
  </>
  );
}

export default App;
