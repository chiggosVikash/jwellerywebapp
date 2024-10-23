import {signInWithEmailAndPassword} from 'firebase/auth'
import { firebaseApp } from "@/app/lib/db/firebase_config";
import {getAuth} from '@firebase/auth'

const auth = getAuth(firebaseApp);

export async function signInWithUserEmailAndPassword(email,password){
    try{
        const userCredentials = await signInWithEmailAndPassword(auth, email, password);

        if(userCredentials.user.email){
            return {
                email: userCredentials.user.email,
                name: userCredentials.user.displayName
            }
        }
        return null;
    }catch(e){
        throw new Error(`Failed to login ${e.message}`)
    }
}