/*Debe mostrar la vista de detalle de un item incluyendo su descripcion, una foto y el precio */ 

/*Desafio clase 9: Importa el ItemCount.js del desafio 4 en el counter ItemDetail.js y configura el evento de compra, el evento
de compra, siguiendo los detalles de manual. */
import { useParams, Link } from 'react-router-dom';
import ItemCount from './ItemCount'
import { useState, useEffect } from 'react';
import { CartContext } from '../context/CartProvider';
import { useContext } from 'react';

export default function ItemDetail ({id, name, image, price, description, stock}){
    const { addItem } = useContext(CartContext);
     const [quantity, setQuantity] = useState(0);
     const [display, setDisplay] = useState(true);
     //console.log("KEY " + id)
     const  onAdd =(amount, id, name) => {
             setQuantity(amount)
             setDisplay(false)
             //console.log("ID " +id)
             const producto = {id, name}
             addItem({ producto, cantidad: amount })
            
     }
        return(
        <>
        <div className="item">
            <div className="name">{name}</div>
            <img className="image" src={image} alt={name} />
            <div className="price">{price}</div>
            <div className="description">{description}</div> 
            <div>Cart Items: {quantity}</div>
            {
                display ? <ItemCount stock={stock} initial={0} onAdd={onAdd} /> : <Link to="/cart"><button className="button primary">Termina tu compra</button></Link>  
            }
        </div>
        </>
    )
}