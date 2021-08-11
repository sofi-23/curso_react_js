<<<<<<< HEAD

import Item from './Item';

export default function ItemListContainer (props) {
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

    /*const getItems = (id = null) => {
        return new Promise ( (resolve, reject) => {
            setTimeout(() => {
                const item = items.find(item=> item.id === id)
                if (item === null) resolve(item)
                reject( {
                    status: 404
                })
            }, 2000)
        })
    }*/
    //const itemList = items.map(item => <Item key={item.id} name={item.name} price={item.price} img={item.img} stock={item.stock} />)

   let itemList;
    const getItems = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          itemList = items.map(item => (
            <Item
              key={item.id}
              name={item.name}
              price={item.price}
              img={item.img}
              stock={item.stock}
            />
          ));
          if (!null) {
            console.log("resolve")
            resolve(itemList);
            
          } else {
            reject({
                
              status: 404
            });
          }
        }, 2000);
        return itemList;
      });
     
    };


    getItems();
    console.log("itemList: " + itemList);
    
   

    return (
        <>
        <div className="itemListContainer">
         {itemList}    
        </div>
=======
import ItemCount from './ItemCount';
import {useState} from 'react';

export default function ItemListContainer (props) {
    const [itemCount, setItemCount ] = useState(0);
    return (
        <>
        <h1>{props.greeting}</h1>
        <ItemCount stock={7}  initial={0} onAdd={setItemCount} />
>>>>>>> 00a46cce002264c050c212736269c76d4defb4b9
        </>
    )
}