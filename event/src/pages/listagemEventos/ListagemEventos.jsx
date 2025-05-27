import "./ListagemEventos.css"
import { Fragment } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Comentario from  "../../assets/images/comentario.svg";
import Toggle from "../../components/toggle/Toggle";

const ListagemEventos = () => {
    return (
        <Fragment>
            <Header />
            <section className="listagemEventos" id="">
                <h1>Eventos</h1>
                <hr />
                <div className="tabela_eventos">
                    <select className="select">
                        <option value="" disabled selected>Todos os Eventos</option>
                        <option value="">ping pong</option>
                        <option value="">Games</option>
                    </select>
                    <table>
                        <thead>
                            <tr className="table_eventos">
                                <th>Titulo</th>
                                <th>Tipo Eventos</th>
                                <th>Comentarios</th>
                                <th>Participar</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="item_listaEventos">
                                <td data-cell="Nome">Nome Evento</td>
                                <td data-cell="Tipo Evento"> Tipo Evento</td>
                                <td data-cell="Data">Data</td>
                                <td daa-cell="Instituição">Instituição</td>
                                <td data-cell="comentario"><img src={Comentario} alt="balao" /></td>
                                <td data-cell="comentario"><Toggle /></td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr className="item_listaEventos">
                                <td data-cell="Nome">Nome Evento</td>
                                <td data-cell="Tipo Evento"> Tipo Evento</td>
                                <td data-cell="comentario"><img src={Comentario} alt="balao" /></td>
                                <td data-cell="comentario"><Toggle /></td>                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
            <Footer />
        </Fragment>
    )
}

export default ListagemEventos;