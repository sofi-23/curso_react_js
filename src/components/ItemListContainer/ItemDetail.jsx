/*Debe mostrar la vista de detalle de un item incluyendo su descripcion, una foto y el precio */ 

export default function ItemDetail ({name, image, price, description}){
    console.log("item: " + name + description + image + price)
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