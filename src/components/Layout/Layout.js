
import React from 'react';
import Hoc from '../../hoc/Hoc'
import './Layout.css';

const Layout =(props) =>{
    return(
        <Hoc>
        <div>Toolbar,Sidedrawer,Backdrop</div>
        <main className="Content">
            {props.children}
        </main>
        </Hoc>
    )
}

export default Layout;