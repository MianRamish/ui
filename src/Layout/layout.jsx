import React, { useState } from 'react';
import Navbar from '../Components/navbar';
import Leftnavbar from '../Components/leftnavbar';

export const Layout = (props) => {
    
    return (
        <div>
        <Navbar/>
        <Leftnavbar/>
        <div className='content-container'>
            {props.children}
        </div>
            
        </div>
    )
}
