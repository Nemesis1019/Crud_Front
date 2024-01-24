

import User from "../../assets/Sample_User_Icon.png"
import { useNavigate } from "react-router-dom"

import {AiFillDelete} from "react-icons/ai"
import {BsFillPencilFill} from "react-icons/bs"
import { useContext } from "react"
import { Contexto } from "../../context"
import { deleteClient } from "../../api"
import { Uptadecard } from "../UpdateCard"

export function UserCard({datos}){
    const {update,setUpdate,setId,setDataUp}= useContext(Contexto)
    async function deleted(id){
        var resultado = window.confirm('Estas seguro?');
        if (resultado === true) {
        await deleteClient(id)
        window.location.reload()
    }
    
    }
    
    return(
        <div className="flex flex-box justify-between items-center w-4/5 ">
            <div className="flex flex-box gap-2">
                <figure className="w-[50px] h-[50px]">
                    <img className="object-fill" src={User} />
                </figure>
                <div>
                    <p className="text-1xl font-bold">{datos.name}</p>
                    <p>{datos.email}</p>
                </div>
            </div>
            <div className="flex flex-col items-center">
                <div className="flex flex-row gap-2">
                        <p>{datos.born}</p>
                        <p>{datos.create}</p>
                        
                </div>
                <div className="flex flex-row gap-2 justify-end">
                        <AiFillDelete size={25} className="cursor-pointer " onClick={()=>{deleted(datos.id)}}/>
                        <BsFillPencilFill onClick={()=>(setUpdate(!update),setId(datos.id),setDataUp(""))} size={23}  className="cursor-pointer"/>
                        
                 </div>
                 
            </div>
        </div>    
    )
}