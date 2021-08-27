import React, { useState } from 'react';
import ItemDetail from '../component/ItemDetail';
export const Context = React.createContext();



export default function CartContext({props}) {
  const [items, setItems] = useState({});

  return (
    <>
      <Context.Provider value={{}}>
        <ItemDetail />
      </Context.Provider>
    </>
  );
}
