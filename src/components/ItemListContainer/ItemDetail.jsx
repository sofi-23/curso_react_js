/*Debe mostrar la vista de detalle de un item incluyendo su descripcion, una foto y el precio */ 

/*Desafio clase 9: Importa el ItemCount.js del desafio 4 en el counter ItemDetail.js y configura el evento de compra, el evento
de compra, siguiendo los detalles de manual. */
import { useParams } from 'react-router-dom';
import ItemCount from './ItemCount'
import { useState, useEffect } from 'react';

export default function ItemDetail ({id, name, image, price, description, stock}){
        const [cartItems, setCartItems] = useState(0)
        const  onAdd =(/*quantityToAdd*/) => {
            
            console.log("Hemos recibido un evento del ItemCount")
        }
        setCartItems()
        return(
        <>
        <div className="item">
            <div className="name">{name}</div>
            <img className="image" src={image} alt={name} />
            <div className="price">{price}</div>
            <div className="description">{description}</div>
            <ItemCount stock={stock} initial={0} onAdd={onAdd} />
            <button>Termina tu compra</button>  
        </div>
        </>
    )
}