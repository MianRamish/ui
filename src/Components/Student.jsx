import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import Searchbar from './searchbar';
import Showclasses from './showclasses';
import './studentregistration.css';

function Student() {
  
    
    return (
        <div>
        <Searchbar/>
        <Link to='/showclasses'><butotn className='btn btn-info'>Classes</butotn></Link>
            
       
        </div>
    )
}

export default Student;
