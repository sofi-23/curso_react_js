import { useState, useEffect } from 'react';


export default function ItemCount ({stock, initial}) {
    const [count, setCount] = useState(initial);
    const [disabledMax, setDisabledMax] = useState(false);
    const [disabledMin, setDisabledMin] = useState(true);
    const [itemCount, setItemCount] = useState(initial)

    const addUp = () => {
        if (count === stock-1) {
            setDisabledMax(true);
            console.log("disabled max true");
            console.log(stock-1)
        } 
        if (count < stock) {
            setCount(count+1);
            setDisabledMin(false);
            console.log(", disabled min false")
        }
    }
    const takeOut = () => {
        if (count === 1 ) {
            setDisabledMin(true);
        }
        if (count > initial) {
            setCount(count-1)
            setDisabledMax(false);
            console.log(" disabled max false")
        }
    } 
    const onAdd = () => {
        console.log("Count: " + count + " itemCount: " + itemCount)
        setItemCount(count + itemCount) 
        console.log("Carrito: " + itemCount)
    }
    return (
        <>
        <div className="itemCountContainer">
            <button className="button is-secondary  addUp" disabled={disabledMin} onClick={ () => takeOut()}>-</button>
            <span>{count}</span>
            <button className="button  is-secondary  takeOut" disabled={disabledMax} onClick={ () => addUp()}>+</button>
        </div>
        <button className="button addToCart" onClick={() => onAdd()}>Add to cart</button>
        </>
    )
}