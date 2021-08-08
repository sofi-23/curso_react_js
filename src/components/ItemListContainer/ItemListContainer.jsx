import ItemCount from './ItemCount';

export default function ItemListContainer (props) {
    return (
        <>
        <h1>{props.greeting}</h1>
        <ItemCount stock={7}  initial={0} />
        </>
    )
}