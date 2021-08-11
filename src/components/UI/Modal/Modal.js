import React from 'react';
import './Modal.css';
import Hoc from '../../../hoc/Hoc';
import Backdrop from '../Backdrop/Backdrop';
class Modal extends React.Component{

shouldComponentUpdate(nextProps,prevProps){
if(nextProps.show !== this.props.show){
    return true;
}else {
    return false;
}
   

}

    render(){
        return(
<>
        <Hoc>
       <Backdrop show={this.props.show} clicked={this.props.hide}/>
<div className="Modal"
style={{transform:this.props.show ? 'translateY(0)':'translateY(-100vh)',opacity:this.props.show ? '1':'0'}}>
{this.props.children}</div>

        
</Hoc>       
            
        </>
        )
    }
}

export default Modal;