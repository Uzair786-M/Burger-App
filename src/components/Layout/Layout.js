import React from 'react';
import Hoc from '../../hoc/Hoc'
import './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';


class Layout extends React.Component{

state = {
    SideDrawer : false
}

SideDrawerOpenHandler = () =>{
    this.setState((prevState) =>{
        return {SideDrawer:!prevState.SideDrawer}
    }
        
    )
}

SideDrawerClosedHandler = () =>{
this.setState({SideDrawer:false})
}




    render() {
        return(
<Hoc>
        <Toolbar opened={this.SideDrawerOpenHandler}/>
        <SideDrawer  open={this.state.SideDrawer} closed={this.SideDrawerClosedHandler}/>
        <main className="Content">
            {this.props.children}
        </main>
        </Hoc>
        )

    }
}

export default Layout;