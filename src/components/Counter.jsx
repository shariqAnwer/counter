import { useState } from "react";
import './Counter.css'

export function Counter() {
    let [counter, setCounter] = useState(0);
    const handleChange = (value) => {
        setCounter(counter + value);
    }
   return (
       <div class="Counter">
           <h1 class= "bigFont">Counter : {counter}</h1>
           <button
            onClick={() => {
                handleChange(1)
                }
            }>
                Increment
            </button>
            <button
            onClick={() => {
                if(counter >= 1) {
                    handleChange(-1)
                }
                }
            }>
                Decrement
            </button>
           <button
            onClick={() => {
                handleChange(Math.pow(counter, 1))
                }
            }>
                Double
            </button>
       </div>
   ) 
}