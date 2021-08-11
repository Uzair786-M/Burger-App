import React from 'react';
import '../OrderSummery/OrderSummery.css';


class OrderSummery extends React.Component{

    componentDidUpdate(){
        console.log('[OrderSummery] will update')
        }
           

    render(){

        const ingredient = Object.keys(this.props.ingredients).map(igKey =><li key={igKey}>{igKey}:{this.props.ingredients[igKey]}</li>)

     
        
            
        
        

        return(
            <>
            <div>
            <h1>Your Order</h1>
    <p>A delicious burger with following ingredients:</p>
    <u>{ingredient}</u>
    <strong>Total Price:{this.props.price}</strong>
            </div>
    
    
            </>
        )
    }

};


export default OrderSummery;