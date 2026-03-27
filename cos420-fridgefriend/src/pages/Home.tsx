import React from 'react'
import { Link } from 'react-router-dom';
import { Refrigerator, CalendarDays, DollarSign, Users, House } from "lucide-react";


const Home = () => {
  return (
    <><div>
          <h1>FridgeFriend</h1>
          <Link to="/home" className="homescreen-link">
              <House size={32} color="#333" strokeWidth={1.5} />
          </Link>
          <hr />
      </div>
      <div>
              <nav>
                  <Link to="/inventory" className="nav-link">
                      <div className="circle-icon">
                          <Refrigerator size={32} color="#333" strokeWidth={1.5} />
                      </div>
                      Inventory
                  </Link>

                  <Link to="/calendar" className="nav-link">
                      <div className="circle-icon">
                          <CalendarDays size={32} color="#333" strokeWidth={1.5} />
                      </div>
                      Calendar
                  </Link>

                  <Link to="/spending" className="nav-link">
                      <div className="circle-icon">
                          <DollarSign size={32} color="#333" strokeWidth={1.5} />
                      </div>
                      Spending
                  </Link>

                  <Link to="/household" className="nav-link">
                      <div className="circle-icon">
                          <Users size={32} color="#333" strokeWidth={1.5} />
                      </div>
                      Household
                  </Link>
              </nav>
              <Link to="/"><button>Sign Out</button></Link>
          </div></>
  )
}

export default Home;