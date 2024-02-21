import { createContext } from "react";

const CarrinhoContext = createContext();

export const CarrinhoProvider = () => {
    return(
        <CarrinhoContext.Provider>
            {children}
        </CarrinhoContext.Provider>
    )
}