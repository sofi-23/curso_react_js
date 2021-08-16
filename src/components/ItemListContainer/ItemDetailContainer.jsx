/*Al iniciar utilizando un efecto de montaje (useEffect), debe llamar a un async mock (promise) que en 2 segundos le devuelva 1 item, y lo guarde en un estado propio (useState)*/

/*const getItems = () => { Esta función debe retornar la promesa que resuelva con delay}
function ItemDetailContainer() { Implementar mock invocando getItems() y utilizando el resolver then return. JSX que devuelva un ItemDitail}*/
import ItemDetail from './ItemDetail';
import {useState, useEffect} from 'react';
import {items} from './items'

export default function ItemDetailContainer () { 
    const  [item, setItem] = useState([]);

    const getItems = () => {
        new Promise ((resolve, reject) => {
            setTimeout(() => {
                resolve(items[0])
            }, 2000)
        })
        .then (dataResolve => {
            setItem(dataResolve);
        })
        .catch (err => console.log(err)); 
    } 

    useEffect(() => {
        getItems();
    }, [])


    return(
        <>
        <ItemDetail  name={item.name} image={item.img} price={item.price} stock={item.stock} description={item.description} />
        </>
    )
}