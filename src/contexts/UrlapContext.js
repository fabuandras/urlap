import { createContext } from "react";
import { useState } from "react";

export const UrlapContext = createContext("")

export const UrlapProvider = ({ children }) => {

    /* betesszük egy listába az űrlap adatait */
    function listaba(adat) {
        console.log(adat)
    }
    
    return <UrlapContext.Provider value={{listaba}}>
        {children}
    </UrlapContext.Provider>
}