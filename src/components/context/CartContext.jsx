import React, { useState, useEffect } from 'react';
import ItemDetail from '../ItemListContainer/ItemDetail';


export const CartContext = React.createContext();



export default function CartProvider({children, defaultCart=[]}) {
  const [cart, setCart] = useState(defaultCart);

  const addItem = ({producto}) => {
    const result = cart.find( cartItem => cartItem.name === producto.name )
    if (result === undefined) { //Si no se encontraba en el cart, agrego 
        setCart({
          ...cart, 
          item: producto.name, 
          quantity: producto.quantity
        })
        cart.map(items=> console.log("Item: " + items.name + "Quantity: " +  items.quantity))
        console.log("Total items: " + cart.length)
    }else{ //Si ya estaba en el cart, sumo solo cantidad
      cart.map(items=> console.log("Item: " + items.name + "Quantity: " +  items.quantity ))
      
      alert("ITEMS EN EL CARRITO: " + cart.length + "producto.quantity " +  producto.quantity)
    }
    
  }
  

  return (
    <>
      <CartContext.Provider value={{cart, addItem}}>
        {children}
      </CartContext.Provider>
    </>
  );
}
