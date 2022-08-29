import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import "./app.css"
axios.defaults.withCredentials=true 
function DashBoard(){
    const navigate=useNavigate()

    const updateMethod=()=>{
        axios.post('http://localhost:3001/createadmin',{
            "fname":"john",
            "email":"john@gmail.com",
            "phone":9283928388000,
            "password":"john@1234"
        },{withCredentials:true}).then((Res)=>console.log(Res)).catch((e)=>console.log(e))
    }

    const logoutMethod=()=>{
       localStorage.removeItem('accesstoken')
       navigate('/')
    }
    const deleteMethod=()=>{
        localStorage.removeItem('accesstoken')
        navigate('/')
    }
    return(
        <div>
            <button onClick={updateMethod}>create admin</button>
            <button>Delete admin acess</button>
            <button onClick={logoutMethod}> Deactivate </button>
            <button onClick={deleteMethod}>logout</button>
        </div>

    )
}
export default DashBoard