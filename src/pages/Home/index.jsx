import { Layout } from "../../components/Layout"
import { UserCard } from "../../components/UserCard"
import { useEffect, useState } from "react"
import { Barra1 } from "../../components/Barra"
import { Barra2 } from "../../components/Barra2"
import {AiOutlineUserAdd} from "react-icons/ai"
import { useNavigate } from "react-router-dom"
import { getAllClients } from "../../api"
import { useContext } from "react"
import { Contexto } from "../../context"
import { Uptadecard } from "../../components/UpdateCard"

export function Home(){
    const {busq,setBusq,update,data,setData}= useContext(Contexto)
    const [Barra,setBarra]=useState(false)
    
    useEffect(()=>{
        async function  load(){
            const result= await getAllClients()
            await setData(result.data)  
        }
         load()
    },[])
    const busqueda=data.filter((dato)=>{
            if(Barra===true){
                return dato.name.includes(busq)
            }
            else{
                return dato.create.includes(busq)
            }
        })
    const navi= useNavigate()
    return(
        <Layout>
            <div className="flex flex-col w-4/5 h-4/5 items-center  bg-white rounded-lg absolute z-0 ">
                <span className="flex flex-box justify-between mt-8 w-4/5">
                    <h1 className="font-bold text-4xl ">Listado de clientes</h1>
                    <AiOutlineUserAdd size={30} className="cursor-pointer ease-in duration-300 hover:scale-125 hover:animate-pulse " onClick={()=>{navi("/create")}}/>
                </span>
                <div className="w-4/5 ">
                {Barra?<Barra1/>:<Barra2/>} 
                    <div className="flex flex-box gap-4 w-full">
                        <label htmlFor="option1" className="block">Por nombre</label>
                        <input type="radio"checked={Barra} onChange={() => setBarra(!false)} id="option1" onClick={()=>setBusq("")}/>
                        <label htmlFor="option2" className="block">Por fecha</label>
                        <input type="radio" checked={!Barra} onChange={() => setBarra(!true)} id="option2" onClick={()=>setBusq("")} />
                    </div>      
                </div>
                {!busq.length>0?data.map((dato)=>(<UserCard key={dato.id} datos={dato}/>)):busqueda.map((dato)=>(<UserCard key={dato.id} datos={dato} />))}
                {update?<Uptadecard />:null}
            </div>
        </Layout>
    )
}