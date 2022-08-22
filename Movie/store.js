import { configureStore } from "@reduxjs/toolkit"
import addReducer, { getall } from "./slices/addslice"
import LoginReducer from "./slices/loginslice"
import MovieReducer, { fetchdata } from './slices/viewslice'
// import { ProductFetch } from "./slices/productslice"
const store=configureStore({
    reducer:{
       
        movie:MovieReducer,
        login:LoginReducer,
        add:addReducer
        
    }
})

store.dispatch(fetchdata())
store.dispatch(getall())
export default store