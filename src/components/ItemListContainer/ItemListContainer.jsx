import {useEffect, useState} from 'react';
import Item from './Item';
import {items} from './items';

export default function ItemListContainer () {
  const [products, setProducts] = useState([]);

    useEffect(()=> {
    new Promise ((resolve, reject) => {
      setTimeout(() => {
        resolve(items)
      },2000);
    })
    .then(dataResolve => {
      console.log("data Resolve" + dataResolve);
      setProducts(dataResolve);
      console.log("id 1" + dataResolve[0].id)
    })
    .catch(error => {
      console.log("err" + error);
    })
  },[])

  
    return (
        <>
        <div className="itemListContainer">
          {products.map((data) => {
          return( 
          <Item 
          id={data.id} 
          name={data.name} 
          image={data.img} 
          price={data.price} 
          stock={data.stock}/>)}) }
        </div>

        </>
    )
}