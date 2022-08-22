import React  from 'react';
import {useSelector} from 'react-redux'
import App from 'App'
import Form from '../components/form'
import Admin from '../components/Admin'

const Main = () => {
    const {loginstatus}=useSelector((state)=>state.login)
    return (  
        <div>
            {
                loginstatus?<Admin/>:<Form></Form>
            }
        </div>
    );
}
 
export default Main;