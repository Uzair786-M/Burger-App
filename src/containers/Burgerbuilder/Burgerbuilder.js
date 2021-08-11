import React, { Component } from 'react';
import Hoc from '../../hoc/Hoc';
import Burger from '../../components/Burger/Burger';
import Buildcontrols from '../../components/Burger/Buildcontrols/Buildcontrols';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummery from '../../components/Burger/OrderSummery/OrderSummery';
const IngredientPrice = {
    salad : 10,
    bacon : 20,
    cheese : 10,
    meat :30
}

class Burgerbuilder extends Component{

    state = {
       ingredients:{ 
        salad : 0,
        bacon : 0,
        cheese :0,
        meat : 0
       },
      totalPrice : 30,
      purchaseable : false,
      purchasing : false

    }

    updatePurchaseIngredient = (ingredients) =>{
        const sum = Object.keys(ingredients)
        .map(igkey => {
            return ingredients[igkey]
        })
        .reduce((sum,elm) =>{
            return sum + elm
        },0)

        this.setState({purchaseable : sum > 0})
    }

    AddIngredientHandler = (type) =>{
        const oldCount = this.state.ingredients[type];
        const newCount = oldCount + 1;
        const updateCount = {
            ...this.state.ingredients
        }
        updateCount[type] = newCount;
        
        const priceAddition = IngredientPrice[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        

       

        this.setState({ingredients: updateCount,totalPrice:newPrice})
        this.updatePurchaseIngredient(updateCount)
       
    }

    removeIngredientHandler = (type) =>{
     const prevCount = this.state.ingredients[type];
     if(prevCount <= 0){
         return;
     }
     const NewCount = prevCount - 1;
     const updatedCount = {...this.state.ingredients};
     updatedCount[type] = NewCount;

    const detuctionPrice = IngredientPrice[type];
    const olddPrice = this.state.totalPrice;
    const updatedPrice = olddPrice - detuctionPrice 

     this.setState({ingredients:updatedCount,totalPrice:updatedPrice})
     this.updatePurchaseIngredient(updatedCount)
    }

    showModalHandler = () =>{
        this.setState({purchasing:true})
    }

    hideModalHandler = () =>{
        this.setState({purchasing:false})
    }

    render(){
        const disableInfo = {
            ...this.state.ingredients
        }

        for (let key in disableInfo){
            disableInfo[key] = disableInfo[key] <= 0
        }

        return(
         <Hoc>
         <Modal  show={this.state.purchasing} hide={this.hideModalHandler}>
             <OrderSummery ingredients={this.state.ingredients} price={this.state.totalPrice}/>
         </Modal>
             <Burger ingredients = {this.state.ingredients} />
             <Buildcontrols Adding={this.AddIngredientHandler} removing={this.removeIngredientHandler} disabled={disableInfo} price={this.state.totalPrice} purchase ={this.state.purchaseable}  ordered={this.showModalHandler}/>
         </Hoc>
        ) 
    }
}

export default Burgerbuilder;