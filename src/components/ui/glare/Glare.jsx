import React from 'react';
import './Glare.css'; // Import the CSS file

const Glare = ({ type }) => {
    return <div className={`glare ${type}`}></div>;
};

export default Glare;
