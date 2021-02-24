import React, { Component } from 'react';
import Hoc from '../../hoc/Hoc';
import Burger from '../../components/Burger/Burger';

class Burgerbuilder extends Component{
    render(){
        return(
         <Hoc>
             <Burger />
             <div>Build Control</div>
         </Hoc>
        )
    }
}

export default Burgerbuilder;