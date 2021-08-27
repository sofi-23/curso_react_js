import React, { useState } from 'react';
import ItemDetail from '../ItemListContainer/ItemDetail';

export const CustomContext = React.createContext();



export default function CartContext({props}) {
  const [items, setItems] = useState({});

  return (
    <>
      <CustomContext.Provider value={{item: '', quantity: ''}}>
        <ItemDetail />
      </CustomContext.Provider>
    </>
  );
}
