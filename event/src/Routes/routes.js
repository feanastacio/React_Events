import { BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "../pages/login/Login";
import CadastroEvento from "../pages/cadastroEvento/cadastroEvento";
import TipoEvento from "../pages/tipoEvento/TipoEvento";
import TipoUsuario from "../pages/tipoUsuario/TipoUsuario";
import ListagemEventos from "../pages/listagemEventos/ListagemEventos";
import Home from "../pages/home/Home";
import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import NotFound from "../pages/notFound/NotFound";


const Privado = (props) => {
    const {usuario} = useAuth();

    if (!usuario) {
        return <Navigate to="/NotFound"/>;
    }
    
    if (usuario.tipoUsuario !== props.tipoPermitido) {      
        return <Navigate to="/NotFound"/>;
    }
    return <props.item/>;
};

const Rotas = () => {
    return(
        <BrowserRouter>
            <Routes>
                {/* http://localhost:3000/=> Login */}
                <Route element={<Login/>} path="/" exact/>
                {/* https://localhost:3000/Home => Home*/}
                <Route element={<Privado tipoPermitido="aluno" item={Home}/>} path="/Home"/>
                {/* https://localhost:3000/Evento => Cadastro de eventos*/}
                <Route element={<Privado tipoPermitido="adm" item={CadastroEvento}/>} path="/Evento"/>
                {/* https://localhost:3000/TipoUsuario => Ver o tipo de usuario*/}
                <Route element={<Privado tipoPermitido="adm" item={TipoUsuario}/>} path="/TipoUsuario"/>
                {/* https://localhost:3000/TipoEvento => Ver o tipo de evento*/}
                <Route element={<Privado tipoPermitido="adm" item={TipoEvento}/>} path="/TipoEvento"/>
                {/* https://localhost:3000/ListagemEventos => Ver o tipo de evento*/}
                <Route element={<Privado tipoPermitido="aluno" item={ListagemEventos}/>} path="/ListagemEventos"/>
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;