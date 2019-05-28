import React, { useState } from "react";
import globalContext from "./globalContext";

const { Provider } = globalContext;
//Component Provider is going to be in charge of sending out our data
//our data, to our child components, sending messages, this messages form what we call context
//the data don´t pass trough many layers

//Component GlobalStore
const GlobalStore = ({ children = undefined }) => {

  const [cart, setCart] = useState([]);
  //const [cartAdd, setCartAdd] = useState([]);

  const addItem = newItem => {
   
    const duplicatedItem= cart.find(({ id }) =>
    newItem.id === id 
    )
    
    if (duplicatedItem) {

      const newCart = cart.map(item =>
        item.id === newItem.id ? {...item, 
         total: item.total + item.price,
          quantity: item.quantity + 1} : item
        )
       setCart(newCart)      
    
  } else {
    
    setCart([...cart, newItem])

  }
}
  

  // Function delete one item, one by one
  const deleteItem = index => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
      
  };








  const deleteAllItems = () => {
    setCart([]);
  };

  //Function delete same items in ticket
  // const deleteItem = id => {
  //   const newCartDel = [...cartDelete];
  //   newCartDel.filter(index => index !== id )
  //   setCartDelete (newCartDel);
  // }
//{cart.filter(index => index !== id )}
  // const deleteItem = (oneItem) => {
  //   const newDelItem = cartDelete.filter((_, item) => item !== oneItem);
  //   setCartDelete (newDelItem);
  // }
  console.log(cart)
  //In provider, values, state variables and function to update the state variable
  return (
    
    <Provider
      value={{
        state: {
          cart
        },
        actions: {
          addItem,
          deleteAllItems,
          deleteItem
        }
      }}
    >
      {children}
    </Provider>

  );


};

export default GlobalStore;
