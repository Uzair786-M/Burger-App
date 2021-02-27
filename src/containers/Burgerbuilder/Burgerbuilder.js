import React, { Component } from 'react';
import Hoc from '../../hoc/Hoc';
import Burger from '../../components/Burger/Burger';

class Burgerbuilder extends Component{

    state = {
       ingredients:{ 
        salad : 0,
        bacon : 0,
        cheese :0,
        meat : 0
       }

    }

    render(){
        return(
         <Hoc>
             <Burger ingredients = {this.state.ingredients} />
             <div>Build Control</div>
         </Hoc>
        )
    }
}

export default Burgerbuilder;