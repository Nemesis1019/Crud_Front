import { Home } from './pages/Home'
import { Create } from './pages/Create'
import { Notfound } from './pages/NotFound'
import { ProContexto } from './context'

import { Routes,BrowserRouter,Route,Navigate} from 'react-router-dom'


function App() {
  

  return (
    <>
      <ProContexto>
        <BrowserRouter>
          <Routes>
            <Route path='' element={<Navigate to='/list'/>}/> 
            <Route path='/list' element={ <Home/> }  />
            <Route path='/create' element={ <Create/> } />
            <Route path='*' element={ <Notfound/> } />
            
          </Routes>
      
        </BrowserRouter>
      </ProContexto>
      
     
    </>
  )
}

export default App
