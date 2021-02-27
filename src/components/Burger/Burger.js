import React from 'react';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';
import './Burger.css';

const burger = (props) =>{

   let transformedIngredient = Object.keys(props.ingredients)
    .map(igKey =>{return[...Array(props.ingredients[igKey])]
        .map((_,i) =>{return<BurgerIngredients key={igKey + i } type={igKey} />})
    })  
    .reduce((arr,cur) =>{
        return arr.concat(cur)
    },[]);

    if(transformedIngredient.length == 0){
        transformedIngredient = <p>Please add some ingredients!</p>
    }

    return(
<div className="Burger">
<BurgerIngredients type="bread-top"/>
{transformedIngredient}
<BurgerIngredients type="bread-bottom"/>
</div>
    )
};


export default burger;