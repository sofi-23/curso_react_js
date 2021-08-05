import { useState, useEffect } from 'react';

export default function ItemCount ({stock}) {
    const [count, setCount] = useState(0);
    const [disabledMax, setDisabledMax] = useState(false);
    const [disabledMin, setDisabledMin] = useState(true);
    
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
        if (count > 0) {
            setCount(count-1)
            setDisabledMax(false);
            console.log(" disabled max false")
        }
    } 

    return (
        <>
        <div className="itemCountContainer">
            <button className="button is-warning is-rounded addUp" disabled={disabledMin} onClick={ () => takeOut()}>-</button>
            <span>{count}</span>
            <button className="button is-warning is-rounded takeOut" disabled={disabledMax} onClick={ () => addUp()}>+</button>
        </div>
        </>
    )
}