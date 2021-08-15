/*Al iniciar utilizando un efecto de montaje (useEffect), debe llamar a un async mock (promise) que en 2 segundos le devuelva 1 item, y lo guarde en un estado propio (useState)*/

/*const getItems = () => { Esta función debe retornar la promesa que resuelva con delay}
function ItemDetailContainer() { Implementar mock invocando getItems() y utilizando el resolver then return. JSX que devuelva un ItemDitail}*/
import ItemDetail from './ItemDetail';

export default function ItemDetailContainer () { 
    return(
        <>
        <ItemDetail name="Screen" description="A very nice screen" price="200 USD" stock="10"></ItemDetail>
        </>
    )
}