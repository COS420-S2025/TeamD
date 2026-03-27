import React, {useState} from 'react';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
import { Refrigerator, CalendarDays, DollarSign, Users, House } from "lucide-react";
import './App.css';
import Login from "./pages/Login"
import Register from "./pages/Register"
import placeholder from './barcode-scanner-placeholder.jpg';




function Home(){
  return (
    <div>
      <nav>
        <Link to="/inventory" className="nav-link">
          <div className="circle-icon">
            <Refrigerator size={32} color="#333" strokeWidth={1.5}/>
          </div>
          <span>Inventory</span>
        </Link>

        <Link to="/calendar" className="nav-link">
          <div className="circle-icon">
            <CalendarDays size={32} color="#333" strokeWidth={1.5}/>
          </div>
          <span>Calendar</span>
        </Link>
          
        <Link to="/spending" className="nav-link">
          <div className="circle-icon">
            <DollarSign size={32} color="#333" strokeWidth={1.5}/>
          </div>
          <span>Spending</span>
        </Link>
          
        <Link to="/household" className="nav-link">
          <div className="circle-icon">
            <Users size={32} color="#333" strokeWidth={1.5}/>
          </div>
          <span>Household</span>
        </Link>
      </nav>
    </div>
  )
}

function Inventory(){
  return (
    <div>
      <nav>
        <Link to="/inventory/itemInfo">Item Info</Link>
      </nav>
      <Outlet />
      <h2 className="header-bar">Inventory</h2>
      <select>
          <option id="fridge">Fridge</option>
          <option id="fridge">Freezer</option>
          <option id="fridge">Pantry</option>
      </select>
      <Link to="/inventory/addItem"><button>Add</button></Link>
      <Link to="/inventory/removeItem"><button>Remove</button></Link>
    </div>
  )
}

function AddItem(){
  return (
    <div>
        <nav>
          <Link to="/inventory/barcodeScanner">Barcode Scanner</Link>
        </nav>
      <Outlet />
      <h2 className="header-bar">Add Item</h2>

    <div>
      <label>Item Name:</label>
      <input type="text" name="itemName" placeholder="Enter your item's name" required></input>
    </div><br />
      
    <div>
          <label>Location</label><br />
          <label>
            <input type="radio" name="location" value="fridge" />Fridge
          </label><br />
          <label>
            <input type="radio" name="location" value="freezer" />Freezer
            </label><br />
          <label><input type="radio" name="location" value="pantry" />Pantry
          </label><br />
    </div><br/>
        <label>Category</label><br />
        <select>
            <option>Produce</option>
            <option>Dairy</option>
            <option>Protein</option>
            <option>Condiments</option>
            <option>Leftovers</option>
            <option>Beverages</option>
            <option>Frozen</option>
          </select><br /><br />

      <div>
        <label>Price:</label>
        <input type="text" name="itemName" placeholder="$0.00"></input>
      </div>
      <div>
        <label>Expiration Date:</label>
        <input type="date" name="expirationDate" placeholder="MM/DD/YYYY"></input>
      </div>

      <div>
        <label>Mark as Opened:</label>
        <input type="checkbox"/>
      </div>

      <div>
        <label>Quantity:</label>
        <input type="text" name="quantity" placeholder="Enter your item's quantity"></input>
      </div>
     
      <br />
      <button type="submit">Add</button>
      <button>Cancel</button>
    </div>
  )
}

function ItemInfo(){
  return (
    <div>
      <h2 className="header-bar">Item Info</h2>
      <button>Back</button>
      <button>Remove</button>
      
    </div>
  )
}

function RemoveItem(){
  return (
    <div>
      <h2 className="header-bar">Remove Item</h2>

       <div>
        <label>Item Name:</label>
        <input type="text" name="itemName" placeholder="Enter your item's name" required></input>
      </div><br />

       <div>
        <label>Quantity:</label>
        <input type="number" name="quantity" placeholder="Enter your item's quantity" required></input>
      </div><br />
      
      
      <button>Remove</button>
      <Link to="/inventory"><button>Cancel</button></Link>
    </div>
  )
}

function BarcodeScanner(){
  return (
    <div>
      <h2 className="header-bar">Barcode Scanner</h2>
      <img src={placeholder} alt="Placeholder barcode scanner"/>;
    </div>
  )
}

function Calendar(){
  return (
    <div>
      <h2 className="header-bar">Expiration Calendar</h2>
       <select>
          <option id="week">Week</option>
          <option id="month">Month</option>
          <option id="year">Year</option>
      </select>
    </div>
  )
}

function Spending(){
  return (
    <div>
      <h2 className="header-bar">Spending</h2>
    </div>
  )
}

function MonthView(){
  return (
    <div>
    </div>
  )
}

function Household(){
  return (
    <div>
      <h2 className="header-bar">Household</h2>
      <h3>Members</h3>
      <hr />
      <nav>
        <Link to="/household/inviteMember"><button>Invite Member</button></Link>
      </nav>
      <Outlet />
    </div>
  )
}

function InviteMember(){
  return (
    <div>
      <h2 className="header-bar">Invite Member</h2>
      <div>
        <label>Name:</label>
        <input type="text" name="quantity" placeholder="Enter new member's name" required></input>
      </div>

      <div>
        <label>Email:</label>
        <input type="email" name="email" placeholder="Enter new members's email" required></input>
      </div>
     
      <br />
      <button type="submit">Enter</button>
      <br />
      <Link to="/household"><button>Back</button></Link>
    </div>
  )
}

function App() {
  
  return (
    <>
    <BrowserRouter>
      <header>
        <h1>FridgeFriend</h1>
         <Link to="/home" className="homescreen-link">
            <House size={32} color="#333" strokeWidth={1.5}/>
        </Link>
      </header>
      <Routes>
          
          <Route path="/" element ={<Login />} />
          <Route path="/register" element ={<Register />} />
          <Route path="/home" element={<Home />}></Route>
          
          <Route path="/inventory" element={<Inventory />}></Route>
            <Route path="/inventory/addItem" element={<AddItem />}></Route>
            <Route path="/inventory/itemInfo" element={<ItemInfo />}></Route>
            <Route path="/inventory/removeItem" element={<RemoveItem />}></Route>
            <Route path="/inventory/barcodeScanner" element={<BarcodeScanner />}></Route>
          <Route path="/calendar" element={<Calendar />}></Route>
            <Route path="/calendar/itemInfo" element={<ItemInfo />}></Route>
          <Route path="/spending" element={<Spending />}></Route>
            <Route path="/spending/monthView" element={<MonthView />}></Route>
          <Route path="/household" element={<Household />}></Route>
            <Route path="/household/inviteMember" element={<InviteMember />}></Route>
      </Routes>
    </BrowserRouter>



  </>
  );
}

export default App;
