import {useEffect, useState} from 'react';

import Item from './Item';
import ItemDetailContainer from './ItemDetailContainer';

export default function ItemListContainer (props) {
  const [products, setProducts] = useState([]);
    const items = [
        {
        id: '1',
        name: 'Keyboard',
        price: '50 USD',
        img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.aliexpress.com%2Fitem%2F1005001551807849.html&psig=AOvVaw2v3KZp2ybBd7K-dZLmyyW0&ust=1628787111126000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCIiumPu2qfICFQAAAAAdAAAAABAH',
        stock: '10'
    },
    {
        id: '2',
        name: 'Mouse',
        price: '20 USD',
        img: '',
        stock: '10'
    },
    {
        id: '3',
        name: 'Speakers',
        price: '30 USD',
        img: '',
        stock: '10'
        
    },
    {
        id: '4',
        name: 'Mousepad',
        price: '8 USD',
        img: '',
        stock: '10'
    }

];
    useEffect(()=> {
    new Promise ((resolve, reject) => {
      setTimeout(() => {
        resolve(items)
      },2000);
    })
    .then(dataResolve => {
      console.log("data Resolve" + dataResolve);
      setProducts(dataResolve);
    })
    .catch(error => {
      console.log("err" + error);
    })
  })


    return (
        <>
        <div className="itemListContainer">
          <ItemDetailContainer />
         {/* {products.map(product=> (
           <Item key={product.id} name={product.name} price={product.price} img={product.img} stock={product.stock} />
         ))}     */}
        </div>

        </>
    )
}