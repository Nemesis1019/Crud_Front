import { useContext } from "react"
import { Contexto } from "../../context"

export function Barra2(){
    const {setBusq}= useContext(Contexto)
    return(
        <div className="w-full">
            <label htmlFor="Nombre" className="font-medium">Fecha de creación</label>
            <input className="border border-black h-[50px] w-full  " style={{padding:"8px"}} id="Fecha" placeholder="Fecha"  type="date" onChange={(event)=>{setBusq(event.target.value)}}></input> 
        </div>
    )
}