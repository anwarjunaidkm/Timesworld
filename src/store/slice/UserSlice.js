import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const countriesApi = createAsyncThunk(
    "user/countriesApi",
    async(data)=>{
        const res= await axios.get("https://restcountries.com/v2/all?fields=name,region,flag")
        console.log("res==",res.data);
        
      
        return res.data
    }
)






const INITIAL_STATE ={
    loading:false,
    List:[],
   
   

}
const  UserSlice = createSlice({
    name:"user",
    initialState:INITIAL_STATE,
    reducers:{
        
    },
    extraReducers:{
        [countriesApi.pending]:(state,action)=>{
            state.loading=true;
            console.log("requseted");
        },
        [countriesApi.fulfilled]:(state,action)=>{
            state.loading=false;
            state.List =action.payload
            console.log("success");
        },
        [countriesApi.rejected]:(state,action)=>{
            state.loading=false;
            console.log("failed");
        },

    }
}) 

export const {} = UserSlice.actions;
export default  UserSlice.reducer;
