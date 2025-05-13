import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"
import comentario from "../../assets/images/comentario.svg"
import "./ListagemEventos.css"

const ListagemEventos = () => {
    return (
        <>
            <Header>
                visible="none"
            </Header>
            <main className="layout_grid main_listagemeventos">
                <section className="listagem_eventos"></section>
                <h1>Eventos</h1>
                <hr />
                <select className="select">
                    <option value="" disabled selected>Todos os Eventos</option>
                    <option value="">Campeonato de dominó</option>
                    <option value="">Competição de truco </option>
                </select>
                <div className="tabela_eventos">
                    <table>
                        <thead>
                            <tr className="table_evento">
                                <th>Título</th>
                                <th>Tipo Eventos</th>
                                <th>Comentários</th>
                                <th>Participar</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="item_listaevento">
                                <td data-cell="Nome">Nome Evento</td>
                                <td data-cell="Tipo Evento"> Tipo Evento</td>
                                <td data-cell="comentario"><img src={comentario} alt="comentário" /></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </main>
            <Footer />
        </>
    )
}
export default ListagemEventos;