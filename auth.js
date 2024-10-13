import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"

export const {handlers,auth,signIn,signOut} = NextAuth({
    providers:[
        Credentials({
            name:"Credentials",
            credentials:{
                email:{label:"Email",type:"email"},
                password:{label:"Password",type:"password"}
            },
            async authorize(credentials){
                const {email,password} = credentials

                if(!email || !password){
                    return null
                }

                if(email != "test@gmail.com"){
                    return null
                }
                if(password != "passcode"){
                    return null
                }

                if(email === "test@gmail.com" && password === "passcode"){
                    return {email:"test@gmail.com",name:"Test User"}
                }

            
            }
        })
    ]
},

{
    pages:{
        signIn:"/signin"
    }
});