import React from 'react';
import './style/Header.css'
import  logo  from '../logo.svg'
const Header = () => {
    return (
        // <div className ='logo'>
        //      <img src={logo} className="App-logo" alt="logo" />
        // </div>
        <div className='Header'>
        <div className='logo'>
            LOGO                                                                        
        </div>

 <div className='Home'>
             Home
        </div>
        <div className='About'>
             About
        </div>  
        <div className='Contact'>
             Contact
        </div>
        </div>
    )
}
export default Header