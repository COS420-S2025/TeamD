import React from 'react'
import { Link } from 'react-router-dom';
import { House } from "lucide-react";


const ExpirationCalendar = () => {
  return (
    <>
    <div>
        <h1>FridgeFriend</h1>
        <Link to="/home" className="homescreen-link">
            <House size={32} color="#333" strokeWidth={1.5} />
        </Link>
        <hr />      
    </div>
    <div>
      <h2 className="header-bar">Expiration Calendar</h2>
       <select>
          <option id="week">Week</option>
          <option id="month">Month</option>
          <option id="year">Year</option>
      </select>
    </div>
    </>
  )
}

export default ExpirationCalendar;