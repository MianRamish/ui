import React from 'react';
import './studentregistration.css';

function Searchbar() {
    return (
        <div>
            <nav style={{ color: 'black'}}>
            <h5>Search Student by :<input type='radio' style={{marginLeft: '30px'}} name='search' />Reistration Number
            <input type='radio' style={{marginLeft: '10px'}} name='search' />CNIC
            <input type='radio' style={{marginLeft: '10px'}} name='search' />Name
                <input type='search' style={{marginLeft: '40px', background : 'transparent'}} />
                <button className='srchbtn' type='submit'><i class="fa-solid fa-magnifying-glass"></i></button></h5>
            
            </nav>
        </div>
    )
}

export default Searchbar;
