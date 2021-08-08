import ItemCount from './ItemCount';
import {useState} from 'react';

export default function ItemListContainer (props) {
    const [itemCount, setItemCount ] = useState(0);
    return (
        <>
        <h1>{props.greeting}</h1>
        <ItemCount stock={7}  initial={0} onAdd={setItemCount} />
        </>
    )
}