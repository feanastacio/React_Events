// Importa as funções do React necessárias para criar e usar contexto
import { createContext, useState, useContext } from "react";

// Cria o contexto de autentificação, que vai permitir compartilhar dados entre componentes
const AuthContext = createContext();

// Esse componente vai envolver a aplicação (ou parte dela) e fornecer os dados de autentificação para os filhos
// Provider = prover/dar
export const AuthProvider = ({children}) => {
    // Cria um estado que guarda os dados do usúario
    const [usuario, setUsuario] = useState(null);

    return (
        // O AuthContext.Provider permite que qualquer componente dentro dele acesse o `usuario` e `setUsuario`
        // Faz com que qualquer componente que esteja dentro de <AuthProvider> consiga acessar o valor {usuario, setUsuario} usando o hook useAuth()
        <AuthContext.Provider value={{usuario,setUsuario}}>
            {children}
        </AuthContext.Provider>
    );
};

// Esse hook personalizado facilita o acesso ao contexto dentro de qualquer componente
//Usar
export const useAuth = () => useContext(AuthContext);