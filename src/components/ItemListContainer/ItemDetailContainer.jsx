/*Al iniciar utilizando un efecto de montaje (useEffect), debe llamar a un async mock (promise) que en 2 segundos le devuelva 1 item, y lo guarde en un estado propio (useState)*/

/*const getItems = () => { Esta función debe retornar la promesa que resuelva con delay}
function ItemDetailContainer() { Implementar mock invocando getItems() y utilizando el resolver then return. JSX que devuelva un ItemDitail}*/
import ItemDetail from './ItemDetail';
import {useState, useEffect} from 'react';
import {items} from './items';
import {useParams} from 'react-router-dom'

export default function ItemDetailContainer () {

    const  [itemList, setItems] = useState([]);
    const getItems = () => {
        new Promise ((resolve, reject) => {
            setTimeout(() => {
                resolve(items)
            }, 2000)
        })
        .then (dataResolve => {
            setItems(dataResolve);
        })
        .catch (err => console.log(err)); 
    } 

    useEffect(() => {
        getItems();
    }, [])

    const getItem = (id) => {
            const item = itemList.find(item => item.id === id);
            return item;
        };
        const { id } = useParams();
        const item = getItem(id)
        console.log("items: " + itemList)

    return(
        <>   
        <ItemDetail  id={item.id} name={item.name} image={item.img} price={item.price} stock={item.stock} description={item.description} />
        </>
    )
}