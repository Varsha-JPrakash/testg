import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'


export const getall=createAsyncThunk('/add/getall',async ()=>{
try{
    const result=await axios.get('http://localhost:3001/empDetails')
    return result.data
}
catch(err){
    console.log(err)
}
})

export const post = createAsyncThunk(
	'/add/getall',
	async (payload) => {
		const resp = await fetch('http://localhost:3001/empDetails', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body:JSON.stringify({ mName: payload.mName,price:payload.price,date:payload.date }),
		});

		
	}
);


const initialValue={
    Data:[],
    loading:true
}
const addSlice=createSlice({
    name:'add',

    initialState:{
        value:initialValue
    },

    reducers:{

        // add:(state,action)=>{
        //     state.value.Data.push(action.payload)
        // },
        add: (state, action) => {
			const adding = {
				id: Date.now(),
				mName: action.payload.mName,
				price:action.payload.price,
                date:action.payload.date
			};
			state.value.Data.push(adding);
		},

        remove:(state,action)=>{
            state.value.Data=state.value.Data.filter((item)=>item.id!==action.payload.userid)
        }

    },

    extraReducers:{
        [getall.pending]:(state,action)=>{
            console.log("pending",action)
            state.loading=true
        },
        [getall.fulfilled]:(state,action)=>{
            console.log('fullfiled',action)
            state.loading=false
            state.value.Data=[...state.value.Data,...action.payload]
            
        },
        [getall.rejected]:(state,action)=>{
            console.log('fullfiled',action)
            state.loading=false
        }
    }
})
export const {add,remove}=addSlice.actions
export default addSlice.reducer;