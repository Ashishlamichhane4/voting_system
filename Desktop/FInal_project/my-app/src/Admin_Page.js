import React from 'react'
import image1 from './coat_of_arms.png'
import image2 from './ecn-logo.jpg'
import './Admin_Page.css'

function Admin_Dashboard() {
  return (
     <div className='header'>
       <div className="logo1">
           <img className="header__logo1" src = {image1}/> 
       </div>
    
        
       <div className="admin_title"> 
          <h1> WELCOME TO  ADMIN PANEL</h1>
        </div >

       <div className='logo2'>

            <img className="header__logo2" src = {image2}/> 
        </div>

   </div>
    

    
  )
}

export default Admin_Dashboard