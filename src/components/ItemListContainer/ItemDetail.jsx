/*Debe mostrar la vista de detalle de un item incluyendo su descripcion, una foto y el precio */ 

export default function ItemDetail ({name, description, price, stock}){
    return(
        <>
        <div className="item">
            <div className="name">{name}</div>
            <div className="description">{description}</div>
            <div className="price">{price}</div>
        </div>
        </>
    )
}