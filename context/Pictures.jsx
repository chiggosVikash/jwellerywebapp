'use client'

import { createContext,useContext,useState } from "react";

export const PicturesContext = createContext(null);

export const PictureProvider = (props)=>{
    const [pictures,setPictures] = useState([]);
    return(
        <PicturesContext.Provider value = {{pictures,setPictures}}>
            {props.children}
        </PicturesContext.Provider>
    )
}

export const usePictures = ()=> useContext(PicturesContext)