import { useState } from "react";

export default function Counter() {

    const [count, setCount] =  useState<number>(0);

    function increment(){
        setCount(count + 1)
    }

    function reset(){
        setCount(0)
    }

    return(
        <div>
            <button onClick={increment}>
                Hiciste click: {count} veces!
            </button>
            <button onClick={reset}>Resetear contador</button>
        </div>
    )
}