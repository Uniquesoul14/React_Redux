import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    userData : JSON.parse(localStorage.getItem("userDataStored")) || []
}
 


const formDataSlice = createSlice({
    name : "userData",
    initialState,
    reducers : {
        addUserData : (state,action)=>{
            const newUserData = {
                name : action.payload.name,
                email : action.payload.email,
                number : action.payload.number,
               
            }            
            state.userData.push(newUserData);
            localStorage.setItem("userDataStored" , JSON.stringify(state.userData))
        },  
        remove : (state , action)=>{
            state.userData.splice(action , 1)
            localStorage.setItem("userDataStored" , JSON.stringify(state.userData))
        } ,
        edit : (state , action)=> {
            const {index , name , email , number } = action.payload
            state.userData[index] = {name : name , email : email , number : number }
            localStorage.setItem("userDataStored" , JSON.stringify(state.userData))

        }
    }
    
})

export default  formDataSlice.reducer;
export const {addUserData ,  remove , edit} = formDataSlice.actions;