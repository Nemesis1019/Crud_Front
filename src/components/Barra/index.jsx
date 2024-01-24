import { useContext } from "react"
import { Contexto } from "../../context"

export function Barra1(){
    const {setBusq}= useContext(Contexto)
    return(
        <div className="w-full">
            <label htmlFor="Nombre" className="font-medium">Nombre completo</label>
            <input className="border border-black h-[50px] w-full  " onChange={(event)=>setBusq(event.target.value)} style={{padding:"8px"}} id="Nombre" placeholder="Nombre"  type="text"></input>
        </div>
    )
}