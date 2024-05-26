import React, {createContext, ReactNode, useContext, useState } from "react";

interface IcontextProviber {
    children:ReactNode
}

interface Icontext {
    featch:string | null
    setFeatch: React.Dispatch<React.SetStateAction<string | null>>
}

export const Context = createContext<Icontext>(
    {} as Icontext
)

export const ContextProviber = ({children}:IcontextProviber)=>{
    const [featch, setFeatch] = useState<string | null>(null)
    return <Context.Provider value={{featch, setFeatch}}>{children}</Context.Provider>
}

export const useFeatch = ()=> useContext(Context) 



