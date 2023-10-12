import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
export const getFeeds = createAsyncThunk('feeds/get', async(arg,{getState})=>{
    return
})
const feeds = createSlice({
    name:'feeds',
    initialState:{
        data:[],
        loading:false,
        errors:null
    },
    extraReducers:builder=>{
        builder
        .addCase(getFeeds.pending,(state)=>{
            state.loading=true
        })
        .addCase(getFeeds.fulfilled,(state,action)=>{
            state.loading=false
            state.data=action.payload
            state.errors=null
        })
        .addCase(getFeeds.rejected,(state,action)=>{
            state.loading=false
            state.errors=action.error
        })
    },
    reducers:{}
})

export default feeds.reducer