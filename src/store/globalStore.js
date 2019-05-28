import React, { useState } from "react";
import globalContext from "./globalContext";

const { Provider } = globalContext;
//Component Provider is going to be in charge of sending out our data
//our data, to our child components, sending messages, this messages form what we call context
//the data don´t pass trough many layers

//Component GlobalStore
const GlobalStore = ({ children = undefined }) => {
  const [order, setOrder] = useState([]);
  //const [cartDelete, setCartDelete] = useState([]);

  const addItem = item => {
    const newOrder = [...order, item];
    setOrder(newOrder);
  };

  const deleteAllItems = () => {
    setOrder([]);
  };

  // Function delete one item, one by one
  const deleteItem = index => {
    const newOrder = [...order];
    newOrder.splice(index, 1);
    setOrder(newOrder);
  };

  
  //Function delete same items in ticket
  // const deleteItem = id => {
  //   const newCartDel = [...cartDelete];
  //   newCartDel.filter(index => index !== id )
  //   setCartDelete (newCartDel);
  // }
//{order.filter(index => index !== id )}
  // const deleteItem = (oneItem) => {
  //   const newDelItem = cartDelete.filter((_, item) => item !== oneItem);
  //   setCartDelete (newDelItem);
  // }

  //In provider, values, state variables and function to update the state variable
  return (
    <Provider
      value={{
        state: {
          order
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
