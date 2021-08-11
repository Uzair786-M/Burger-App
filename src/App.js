import React from 'react';
import Layout from './components/Layout/Layout';
import Burgerbuilder from './containers/Burgerbuilder/Burgerbuilder';
import Checkout from './containers/Checkout/Checkout';
class App extends React.Component{
  render(){
    return(
      <div>
      <Layout>
        <Burgerbuilder />
        {/* <Checkout /> */}
      </Layout>
      </div>
    )
  }
}

export default App;