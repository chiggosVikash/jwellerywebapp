import {create} from "zustand"
import axios from "axios"
import Cookies from "js-cookie";

export const authStore = create((set)=>({
    processing:false,
    isAuthenticated:false,
    user:null,
    errorMessage:null,

    login:async (email,password)=>{
        try{
            set({processing:true})
            const response = await axios.get("/api/custom-auth",
            {
                params:{
                    email:email,
                    password:password
                }
            });
            if(response.status===200){
                set({isAuthenticated:true,user:response.data.user,processing:false})
                const token = response.data.token;
                Cookies.set("auth-token",token)
                return;
            }
            set({errorMessage:"Authentication failed check and try again",processing:false})

        }catch(e){
            set({errorMessage:"Authentication failed check and try again",processing:false})
        }
    },

    setErrorMessage:(message)=>{
        set({errorMessage:message})
    },

    cookiesStatus:()=>{
        const token = Cookies.get("auth-token")
        if(token){
            return true;
        }
        return false;
    }
    
}))

