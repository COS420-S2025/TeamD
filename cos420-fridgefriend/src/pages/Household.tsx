import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import { House } from "lucide-react";


const Household = () => {
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
      <h2 className="header-bar">Household</h2>
      <h3>Members</h3>
      <hr />
      <nav>
        <Link to="/household/inviteMember"><button>Invite Member</button></Link>
      </nav>
      <Outlet />
    </div>
    </>
  )
}

export default Household;