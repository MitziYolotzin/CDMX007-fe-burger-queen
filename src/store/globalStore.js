import React, { useState } from "react";
import globalContext from "./globalContext";

const { Provider } = globalContext;
//Component Provider is going to be in charge of sending out our data
//our data, to our child components, sending messages, this messages form what we call context
//the data don´t pass trough many layers

//Component GlobalStore
const GlobalStore = ({ children = undefined }) => {
  const [order, setOrder] = useState([]);
  //const [orderAdd, setOrderAdd] = useState([]);

  const addItem = newItem => {
    const duplicatedItem = order.find(({ id }) => newItem.id === id);

    if (duplicatedItem) {
      const newOrder = order.map(item =>
        item.id === newItem.id
          ? {
              ...item,
              total: item.total + item.price,
              quantity: item.quantity + 1
            }
          : item
      );

      setOrder(newOrder);
    } else {
      setOrder([...order, newItem]);
    }
  };

  //
  const deleteItem = newItem => {
    // console.log(newItem.item.quantity)
    // console.log(newItem.item.total)
    let lastDeleteItem = [];

    if (newItem.item.quantity > 1) {
      newItem.item.quantity = newItem.item.quantity - 1;
      newItem.item.total = newItem.item.total - newItem.item.price;
      setOrder([...order]);
    } else {
      console.log("last item delete");
      lastDeleteItem = order.filter(element => {
        return element !== newItem.item;
      });
      setOrder([...lastDeleteItem]);
    }
  };

  //
  const deleteAllItems = () => {
    setOrder([]);
  };

  // Function delete one item, one by one
  // const deleteItem = index => {
  //   const newOrder = [...order];
  //   newOrder.splice(index, 1);
  //   setOrder(newOrder);

  // };

  console.log(order);
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
