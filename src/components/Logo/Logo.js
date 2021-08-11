
import React from 'react';
import burgerLogo from '../../assest/28.1 burger-logo.png';
import './Logo.css';

const Logo = () =>{
    return(
        <>
<div className="logo">
    <img src={burgerLogo} alt="My burger logo"/>
</div>
        </>
    )
}

export default Logo;