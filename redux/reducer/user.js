import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
export const register = createAsyncThunk('user/get', async(arg,{getState})=>{
    return
})
const user = createSlice({
    name:'user',
    initialState:{
        data:[],
        loading:false,
        errors:null
    },
    extraReducers:builder=>{
        builder
        .addCase(register.pending,(state)=>{
            state.loading=true
        })
        .addCase(register.fulfilled,(state,action)=>{
            state.loading=false
            state.data=action.payload
            state.errors=null
        })
        .addCase(register.rejected,(state,action)=>{
            state.loading=false
            state.errors=action.error
        })
    },
    reducers:{}
})

export default user.reducer