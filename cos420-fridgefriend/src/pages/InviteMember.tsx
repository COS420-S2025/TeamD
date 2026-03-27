import React from 'react'
import { Link } from 'react-router-dom';
import { House } from "lucide-react";


const InviteMember = () => {
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
    </>
  )
}

export default InviteMember;