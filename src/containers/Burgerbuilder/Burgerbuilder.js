import React, { Component } from 'react';
import Hoc from '../../hoc/Hoc';

class Burgerbuilder extends Component{
    render(){
        return(
         <Hoc>
             <div>Burger</div>
             <div>Build Control</div>
         </Hoc>
        )
    }
}

export default Burgerbuilder;