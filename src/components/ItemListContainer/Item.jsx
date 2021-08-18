import ItemCount from './ItemCount';
import { Link } from 'react-router-dom'

export default function Item ({id, name, price, img, stock}) {
  console.log("Img: " + img)
    return (
        <>
        <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={img} alt={name} />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">{name}</p>
            </div>
          </div>
      
          <div className="content">
            <p>Price: <span>{price}</span></p>
          </div>
          
          <ItemCount stock={stock} initial={0} />
          <Link to={ `/item/${id}`}>
          <span key={id}>See more details</span>
          </Link>
        </div>
      </div>
      </>
    )
}