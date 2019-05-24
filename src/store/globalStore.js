import React, { useState } from 'react'
import globalContext from './globalContext';

const { Provider } = globalContext;
//Component Provider is going to be in charge of sending out our data
//our data, to our child components, sending messages, this messages form what we call context
//the data don´t pass trough many layers

//Component GlobalStore
const GlobalStore = ({ children = undefined }) => {
  const [cart, setCart] = useState([]);
  const [cartDelete, setCartDelete] = useState([]);

  const addItem = (item) => {
    const newCart = [...cart, item];
setCart(newCart);
    
    
  }

  const deleteItem = (oneItem) => {
    const newDelItem = cartDelete.filter((_, item) => item !== oneItem);
    setCartDelete (newDelItem);
  }

  

//In provider, values, state variables and function to update the state variable
  return (
    <Provider
      value={{
        state: {
          cart,
          cartDelete
      
        },
        actions: {
          addItem, 
          deleteItem
        }
      }}
    >
      {children}
    </Provider>
  )
}

export default GlobalStore;
