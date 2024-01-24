import { Layout } from "../Layout"

import {IoIosArrowBack} from "react-icons/io"
import { useNavigate} from "react-router-dom";
import { useContext, useEffect } from "react"
import { Contexto } from "../../context"
import { getClient } from "../../api";
import { updateclient } from "../../api";

export function Uptadecard(){
    const navigate = useNavigate();
    
    const {update,setUpdate,dataUp,setDataUp,id,Form,setForm}= useContext(Contexto)
    
    
    useEffect(()=>{
        async function loadclient(indice){
            const result= await getClient(indice)
            setDataUp(result.data)
            setForm(result.data)
            
        }
         loadclient(id)
         
    },[])
    async function handleSubmit(indice,value){
        
        
        await updateclient(value,indice)
        setUpdate(!update)
        window.location.reload()
    }
    return(
        <Layout>
            <div className="z-10 absolute top-0 left-0 flex flex-col w-full h-full items-center justify-center bg-white rounded-lg gap-5 ">
                <div className="flex flex-row w-4/5 justify-between">
                    <h1 className="text-4xl font-bold">Actualizar cliente</h1> 
                    <IoIosArrowBack size={32} onClick={()=>setUpdate(!update)} className="cursor-pointer ease-in duration-500 hover:scale-125 hover:animate-pulse "/>  
                </div>
                <div className="flex flex-col w-4/5 gap-5 ">
                    <div className="flex flex-box justify-between gap-5 ">
                        <div className="w-3/5">
                            <label htmlFor="Nombre" className="block">Nombre completo</label>
                            <input className="border border-black h-[50px] w-full  " style={{padding:"8px"}} id="Nombre" placeholder="Nombre" defaultValue={dataUp.name} onChange={(event)=>setForm({...Form,name:event.target.value})} type="text"></input>
                        </div>
                        <div className="w-2/5">
                            <label htmlFor="Numero">Numero de Documento</label>
                            <input className="border border-black h-[50px] w-full" style={{padding:"8px"}} id="Numero" placeholder="Numero" defaultValue={dataUp.number} onChange={(event)=>setForm({...Form,number:event.target.value})}  type="number"></input>
                        </div>
                    </div>
                    <div className="flex flex-box justify-between gap-5 mb-5">
                        <div className="w-2/5">
                            <label htmlFor="Fecha">Fecha de Nacimiento</label>
                            <input className="border border-black  w-full" id="Fecha" style={{padding:"8px"}} placeholder="Fecha" defaultValue={dataUp.born} onChange={(event)=>setForm({...Form,born:event.target.value})}   type="date"></input>
                        </div>
                        <div className=" w-3/5">
                            <label htmlFor="Fecha">Email</label>
                            <input className="border border-black w-full" id="email" style={{padding:"8px"}} placeholder="Email" type="email" defaultValue={dataUp.email}  onChange={(event)=>setForm({...Form,email:event.target.value})}></input>
                        </div>
                    </div>
                    <hr className="border border-black"/>
                    <div className="flex flex-box justify-end">
                        <button className="ease-in duration-500 hover:scale-125 cursor-pointer hover:animate-pulse bg-black text-white h-[50px] w-[80px]"  onClick={()=>handleSubmit(Form,id)}>Guardar</button>
                    </div> 
                    
                </div>
            </div> 
        </Layout>
    )
}