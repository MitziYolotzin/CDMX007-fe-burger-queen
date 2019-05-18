import React, { useState } from 'react'
import globalContext from './globalContext';

const { Provider } = globalContext;

const GlobalStore = ({ children = undefined }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item) => {
    const newCart = [...cart, item];
    setCart(newCart);
  }

  return (
    <Provider
      value={{
        state: {
          cart
        },
        actions: {
          addItem
        }
      }}
    >
      {children}
    </Provider>
  )
}

export default GlobalStore
