import { useState } from "react"
import { Contador } from "./Contador"

export function Contadores() {
    
    const[isFinish, setIsFinish] = useState(false)

    return(
        <div className='contadores'>
         <Contador></Contador>
         <Contador></Contador>
        </div>
    )
}