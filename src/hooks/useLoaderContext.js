import { useContext } from "react";
import { LoaderContext } from "../context/LoaderContext";

/* Hook personalizzato che i componenti figli useranno per consumare il contesto */
function useLoaderContext() {
    const context = useContext(LoaderContext);
    return context;
}

export default useLoaderContext;
