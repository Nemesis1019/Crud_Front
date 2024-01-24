import { Layout } from "../../components/Layout";

import {IoIosArrowBack} from "react-icons/io"
import { useNavigate} from "react-router-dom";
import { useContext} from "react"
import { Contexto } from "../../context"
import { postClients } from "../../api";

export function Create(){
    const navigate = useNavigate();
    const {Form,setForm}= useContext(Contexto)
        async function handleSubmit(value){
            await postClients(value)
            setForm({
            name: '',
            email: '',
            number:'',
            born: '',
        });
        navigate("/list")
        }
        
        
      
    return(
        <Layout>
            <div className="flex flex-col w-4/5 h-4/5 items-center justify-center bg-white rounded-lg gap-5 ">
                <div className="flex flex-row w-4/5 justify-between">
                    <h1 className="text-4xl font-bold">Nuevo Cliente</h1> 
                    <IoIosArrowBack size={32} className="cursor-pointer ease-in duration-500 hover:scale-125 hover:animate-pulse " onClick={()=>navigate("/")}/>  
                </div>
                
                <div className="flex flex-col w-4/5 gap-5 ">
                    
                    <div className="flex flex-box justify-between gap-5 ">
                        <div className="w-3/5">
                            <label htmlFor="Nombre" className="block">Nombre completo</label>
                            <input className="border border-black h-[50px] w-full  " style={{padding:"8px"}} id="Nombre" placeholder="Nombre"  type="text" value={Form.name} onChange={(event)=>setForm({...Form,name:event.target.value})}/>  
                        </div>
                        <div className="w-2/5">
                            <label htmlFor="Numero">Numero de Documento</label>
                            <input className="border border-black h-[50px] w-full" style={{padding:"8px"}} id="Numero" placeholder="Numero"  type="number" value={Form.number} onChange={(event)=>setForm({...Form,number:event.target.value})}></input>
                        </div>
                    </div>
                    <div className="flex flex-box justify-between gap-5 mb-5">
                        <div className="w-2/5">
                            <label htmlFor="Fecha">Fecha de Nacimiento</label>
                            <input className="border border-black  w-full" id="Fecha" style={{padding:"8px"}} placeholder="Fecha"  type="date" value={Form.born} onChange={(event)=>setForm({...Form,born:event.target.value})}></input>
                        </div>
                        <div className=" w-3/5">
                            <label htmlFor="Fecha">Email</label>
                            <input className="border border-black w-full" id="email" style={{padding:"8px"}} placeholder="Email" type="email" value={Form.email} onChange={(event)=>setForm({...Form,email:event.target.value})}></input>
                        </div>
                    </div>
                    <hr className="border border-black"/>
                    <div className="flex flex-box justify-end">
                        <button className="ease-in duration-500 hover:scale-125 cursor-pointer hover:animate-pulse bg-black text-white h-[50px] w-[80px]"  onClick={()=>handleSubmit(Form)} >Guardar</button>
                    </div>
                    
                </div>
                {console.log(Form)}
                
            </div>
            
        </Layout>
    )
}