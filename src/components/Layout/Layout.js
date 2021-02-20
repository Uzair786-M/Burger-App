import React from 'react';
import Hoc from '../../hoc/Hoc'

const Layout =(props) =>{
    return(
        <Hoc>
        <div>Toolbar,Sidedrawer,Backdrop</div>
        <main>
            {props.children}
        </main>
        </Hoc>
    )
}

export default Layout;