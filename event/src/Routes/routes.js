import { BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "../pages/login/Login";
import CadastroEvento from "../pages/cadastroEvento/cadastroEvento";
import TipoEvento from "../pages/tipoEvento/TipoEvento";
import TipoUsuario from "../pages/tipoUsuario/TipoUsuario";
import ListagemEventos from "../pages/listagemEventos/ListagemEventos";

const Rotas = () => {
    return(
        <BrowserRouter>
            <Routes>
                {/* http://localhost:3000/=> Login */}
                <Route path="/" element={<Login/>} exact/>
                {/* https://localhost:3000/Evento => Cadastro de eventos*/}
                <Route path="/Evento" element={<CadastroEvento/>}/>
                {/* https://localhost:3000/TipoUsuario => Ver o tipo de usuario*/}
                <Route path="/TipoUsuario" element={<TipoUsuario/>}/>
                {/* https://localhost:3000/TipoEvento => Ver o tipo de evento*/}
                <Route path="/TipoEvento" element={<TipoEvento/>}/>
                {/* https://localhost:3000/ListagemEventos => Ver o tipo de evento*/}
                <Route path="/ListagemEventos" element={<ListagemEventos/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;