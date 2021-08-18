/*Debe mostrar la vista de detalle de un item incluyendo su descripcion, una foto y el precio */ 
import { useParams } from 'react-router-dom';

export default function ItemDetail ({id, name, image, price, description}){

    return(
        <>
        <div className="item">
            <div className="name">{name}</div>
            <img className="image" src={image} />
            <div className="price">{price}</div>
            <div className="description">{description}</div>
        </div>
        </>
    )
}