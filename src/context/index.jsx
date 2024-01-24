import { createContext,useState } from "react";

const Contexto= createContext()


function ProContexto({children}){
    
    const [busq,setBusq]=useState("")
    const [update,setUpdate]=useState(false)
    const [Form,setForm] =useState({name:"",number:"",email:"",born:""})
    const [id,setId]=useState(null)
    const [data,setData]=useState([])
    const [dataUp,setDataUp]=useState([])
    return(
        <Contexto.Provider value={{busq,setBusq,update,setUpdate,Form,setForm,id,setId,data,setData,dataUp,setDataUp}}>
            {children}
        </Contexto.Provider>
    )
    
}

export {Contexto,ProContexto}