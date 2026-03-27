import React from 'react'
import { Link } from 'react-router-dom';
import { House, Camera } from "lucide-react";


const AddItem = () => {
  return (
    <>
    <div className="header">
      <h1>FridgeFriend</h1>
        <Link to="/home" className="homescreen-link">
          <House className="header-item" size={32} color="#333" strokeWidth={1.5} />
        </Link>
        <hr />
    </div>
    <div>
        <h2 className="header-bar">Add Item</h2>  
        <nav>
          <Link to="/inventory/barcodeScanner">
            <Camera size={32} color="#333" strokeWidth={1.5} />
          </Link>
        </nav>
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
          <Link to="/inventory"><button>Cancel</button></Link>
        </div>
      </>
  )
}

export default AddItem;