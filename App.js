
import {BrowserRouter,Route,Routes,Link} from 'react-router-dom'
import DashBoard from './app/Dashboard'
import LoginComponent from './app/Login'
import Login from './app/register'


function App()
{
    return(
       <div>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<LoginComponent></LoginComponent>}></Route>
            <Route path='/' element={<Login></Login>}></Route>
            <Route path='/Dashboard' element={<DashBoard></DashBoard>}></Route>
        </Routes>
        </BrowserRouter>
       </div>
    )
}
export default App