import React from 'react';
import loader from '../img/spinner.gif';


export default function Loader() {
    return (
        <div className="d-flex justify-content-center align-items-center h-100">
            <img height="120"  src={loader} alt="" />            
        </div>
    )
}
