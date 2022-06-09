import React from 'react';
import ChartArea from './Areachart';
import Bargraph from './bargraph';
import Piegraph from './piegraph';
import './leftnavbar.css';


function Dashboard() {
    return (
        <div>
     <div className='content-container'>
     <h3>Dashboard</h3>
       <Piegraph/>
      <Bargraph/>
      <ChartArea/> 
     </div>
    
        </div>
    )
}

export default Dashboard;



