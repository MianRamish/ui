import React from 'react';
import '../Components/leftnavbar.css';
import {Link} from 'react-router-dom';

function Leftnavbar() {
    
   
    return (
        <>
        
         <nav className='leftnav'>
            <ul className='navmenu'>
                <li className='navitems'>
                    <Link to='/' className='navlinks'><i class="fa-solid fa-gauge"></i></Link>
                </li>
                <li className='navitems'>
                    <Link to='/student' className='navlinks'><i class="fa-solid fa-user-graduate"></i></Link>
                </li>
                <li className='navitems'>
                    <Link to='/staff' className='navlinks'><i class="fa-solid fa-user-tie"></i></Link>
                </li>
                <li className='navitems'>
                    <Link to='/fee' className='navlinks'><i class="fa-solid fa-file-invoice-dollar"></i></Link>
                </li>
                <li className='navitems'>
                    <Link to='/result' className='navlinks'><i class="fa-solid fa-address-card"></i></Link>
                </li>
                <li className='navitems'>
                    <Link to='/expenses' className='navlinks'><i class="fa-solid fa-file-circle-check"></i></Link>
                </li>
                <li className='navitems'>
                    <Link to='/certificates' className='navlinks'><i class="fa-solid fa-certificate"></i></Link>
                </li>
                <li className='navitems'>
                    <Link to='/setting' className='navlinks'><i class="fa-solid fa-gear"></i></Link>
                </li>
                <li className='navitems'>
                    <Link to='/announcement' className='navlinks'><i class="fa-solid fa-bullhorn"></i></Link>
                </li>
                <li className='navitems'>
                    <Link to='/websitesetting' className='navlinks'><i class="fa-solid fa-gears"></i></Link>
                </li>
            </ul>
            
           </nav>
        <input type="checkbox" id="menu-toggle" />
<label for="menu-toggle" className="menu-icon"><i class="fa fa-bars"></i></label>
        <div class="slideout-sidebar">
        <ul className="navmenu2">
                <li className='navlist2'>
                <Link   to='/' className="navlinks2" > DashBoard </Link>
                   </li>
                <li className='navlist2'>
                <Link to='/student' className='navlinks2'>Students</Link></li>
                <li className='navlist2'>
                <Link to='/staff' className='navlinks2'>Staff</Link></li> 
                <li className='navlist2'>
                <Link to='/fee' className='navlinks2'>Fee</Link></li>
                <li className='navlist2'>
                <Link to='/result' className='navlinks2'>Result</Link></li>
                <li className='navlist2'>
                <Link to='/expenses' className='navlinks2'>Expenses</Link></li>
                <li className='navlist2'>
                <Link to='/certificates' className='navlinks2'>Certificates</Link></li>
                
                <li className='navlist2'>
                <Link to='/setting' className='navlinks2'>Setting</Link></li>
                <li className='navlist2'>
                <Link to='/announcement' className='navlinks2'>Announcement</Link></li>
                <li className='navlist2'>
                <Link to='/websitesetting' className='navlinks2'>Website Setting</Link></li>
            </ul>
</div>

           </>
    )
}

export default Leftnavbar;
