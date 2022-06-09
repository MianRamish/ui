import React from 'react'
import { Link } from 'react-router-dom';
import Comingsoon from './coming soon/comingsoon'

function Expenses() {
    return (
        <div>
            <h1>Expenses</h1>
            <Link to='/registerforms'><button className='btn btn-success'>Registration</button></Link>
            <Comingsoon/>
        </div>
    )
}

export default Expenses;
