import React from 'react';
import './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';




const Toolbar = (props) =>{
    return(
        <>
        
        <div className="toolbar">
            <DrawerToggle clicked={props.opened}/>
            <div className="Logo">
            <Logo />
            </div>
            
            <nav className="DesktopOnly">
                <NavigationItems />
            </nav>
        </div>

        </>
    )
}

export default Toolbar;