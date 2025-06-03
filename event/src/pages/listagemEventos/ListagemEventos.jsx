import "./ListagemEventos.css"
import { format } from "date-fns/fp";
import { useEffect, useState } from "react";
import api from "../../Services/Services.js";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Modal from "../../components/modal/Modal.jsx";
import Toogle from "../../assets/images/inscrito.svg";
import Comentario from "../../assets/images/comentario.svg";
import Descricao from "../../assets/images/informacoes 1.svg";

const ListagemEventos = () => {

    const [listaEventos, setListaEventos] = useState([])

        async function listarEventos() {
            try {
               const resposta = await api.get("Eventos");
               setListaEventos(resposta.data);
            } catch (error) {
                console.log(error);   
            }
        }

        useEffect(() => {
            listarEventos();
        },[])

    return(
        <>
        <Header/>
        <main className="main_lista_eventos layout-grid">
            <div className="titulo">
                <h1>Eventos</h1>
                <hr/>
            </div>
            <select name="" id="">
                <option value="" selected> todos os eventos</option>
            </select>
            <table className="tabela_listagem_eventos">
                <thead>
                    <tr className="th_lista_eventos">
                        <th>Título</th>
                        <th>Data do Evento</th>
                        <th>Tipo Evento</th>
                        <th>Descrição</th>
                        <th>Comentários</th>
                        <th>Participar</th>
                    </tr>
                </thead>
                <tbody>
                    {listaEventos.length > 0 ? (
                        listaEventos.map((item) => (
                            <tr>
                                <td>{item.nomeEvento}</td>
                                <td>{format(item.dataEvento, "dd/MM/yy")}</td>
                                <td>{item.tiposEventos.tituloTipoEvento}</td>
                                <td><img className="icon" src={Descricao} alt="" /></td>
                                <td><img className="icon" src={Comentario} alt="" /></td>
                                <td><label className="switch">
                                    <input type="checkbox" />
                                    <span className="slider"></span>
                                    </label>
                                </td>
                            </tr>
                        ))
                    ): (
                        <p>Não existe nenhum evento!</p>
                    )}
                </tbody>
            </table>
        </main>
        <Footer/>
        <Modal/>
        </>
    )
}

export default ListagemEventos;