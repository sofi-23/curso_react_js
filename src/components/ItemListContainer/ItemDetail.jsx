/*Debe mostrar la vista de detalle de un item incluyendo su descripcion, una foto y el precio */ 

/*Desafio clase 9: Importa el ItemCount.js del desafio 4 en el counter ItemDetail.js y configura el evento de compra, el evento
de compra, siguiendo los detalles de manual. */
import { useParams, Link } from 'react-router-dom';
import ItemCount from './ItemCount'
import { useState, useEffect } from 'react';
import CustomContext from '../context/CartContext';
import { useContext } from 'react';


export default function ItemDetail ({id, name, image, price, description, stock}){
        const value = useContext(CustomContext);
        const [val, setVal] = useState(value)
        console.log("VALUE " +value)
       // value.item = name;
        const [cartItems, setCartItems] = useState(0);
        const [display, setDisplay] = useState(true);
        const  onAdd =(amount) => {
                setCartItems(amount)
                setDisplay(false)
                console.log("amount" + amount)
                console.log("cart items:" + cartItems)
        }
        const addItem = (amount, item) => {
            value.item = item;
            value.quantity = amount;
            console.log("Item: " + value.item + " Quantity: " + value.quantity)

        }
       // value.quantity = cartItems;
        return(
        <>
        <div className="item">
            <div className="name">{name}</div>
            <img className="image" src={image} alt={name} />
            <div className="price">{price}</div>
            <div className="description">{description}</div> 
            <div>Cart Items: {cartItems}</div>
            {
                display ? <ItemCount stock={stock} initial={0} onAdd={onAdd} /> : <Link to="/cart"><button className="button primary" onClick={addItem(cartItems, name)}>Termina tu compra</button></Link>  
            }
        </div>
        </>
    )
}