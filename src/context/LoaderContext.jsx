import { createContext, useState } from "react";

/**************
    CONTEXT
***************/
// Creazione contesto loader
const LoaderContext = createContext(); 

// Fornitura del contesto tramite Provider
function LoaderProvider({children}) {

    const [isLoading, setIsLoading] = useState(false);      // Variabile di stato per gestire la visibilità del context 

    /**************
        RENDERING
    **************/
    return (
        <LoaderContext.Provider value={{ isLoading, setIsLoading }}>
            {children}
        </LoaderContext.Provider>
    );
}

export { LoaderContext, LoaderProvider };