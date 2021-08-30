import React, { useState, useEffect } from 'react';
import ItemDetail from '../ItemListContainer/ItemDetail';


export const CartContext = React.createContext();



export default function CartProvider({children, defaultCart=[]}) {
  const [cart, setCart] = useState(defaultCart);

  const addItem = ({producto, cantidad}) => {
    const result = cart.find( prod => {
      return parseInt(prod.producto.id) === parseInt(producto.id) 
    })
    if (result === undefined) { //Si no se encontraba en el cart, agrego 
        setCart([
          ...cart, {
          producto,
          quantity: cantidad,
        }])
    }else{ //Si ya estaba en el cart, sumo solo cantidad
     
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
