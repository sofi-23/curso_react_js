//import { items } from '../components/ItemListContainer/items.js';
import { useParams } from 'react-router-dom'
import { items } from '../ItemListContainer/items';
import {useState, useEffect} from 'react';
import Item from '../ItemListContainer/Item'

export default function Categories () {
    const [itemList, setItemList] = useState([]);
    const { category } = useParams()
    console.log("category: " + category)
    const getItem = () => {
        new Promise ((resolve, reject) => {
            setTimeout(() => {
                const x = items.filter((item)=>item.category === category)
                resolve(x)
            }, 1000)
        })
        .then (dataResolve => {
            setItemList(dataResolve);
        })
        .catch (err => console.log(err)); 
    } 
    useEffect(() => {
        getItem();
        console.log("itemList: " + itemList)
    }, [category])

    return(
        <>
        
        <h1>Working on this</h1>
        <div className="itemListContainer">
        { itemList.map((item) => {
            return (
                <Item  id={item.id} name={item.name} image={item.img} price={item.price} stock={item.stock} />
                )
            })
           
            } 
            </div>     
        </>
    )
}