import "./ListagemEventos.css"
import { format } from "date-fns/fp";
import { useEffect, useState } from "react";
import api from "../../Services/Services.js";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Modal from "../../components/modal/Modal.jsx";
import Comentario from "../../assets/images/comentario.svg";
import Descricao from "../../assets/images/informacoes 1.svg";
import Swal from "sweetalert2";
import { useAuth } from "../../contexts/AuthContext.js";

const ListagemEventos = () => {

    const [listaEventos, setListaEventos] = useState([]);
    const [tipoModal, setTipoModal] = useState("");
    const [dadosModal, setDadosModal] = useState({});
    const [modalAberto, setModalAberto] = useState(false);
    const [filtroData, setFiltroData] = useState(["todos"]);
    
    const {usuario} = useAuth();
    // const [usuarioId, setUsuarioId] = useState("0CE974E0-6D5C-41D1-BA9C-BEBED37B9FFB");

        async function listarEventos() {
            try {
                const resposta = await api.get("Eventos");
                const todosOsEventos = resposta.data;

                const respostaPresenca = await api.get("PresencasEventos/ListarMinhas/"+usuario.idUsuaio)
                const minhasPresencas = respostaPresenca.data;
                const eventosComPresencas = todosOsEventos.map((atualEvento) => {
                    const presenca = minhasPresencas.find(p => p.idEvento === atualEvento.idEvento);
                    return{ 
                        ...atualEvento,
                        possuiPresenca: presenca?.situacao === true,
                        idPresenca: presenca?.idPresencaEvento || null
                    }
                })

                setListaEventos(eventosComPresencas);
           
            } catch (error) {
                console.log(error);   
            }
        }

        useEffect(() => {
            listarEventos();
            console.log(usuario);
        },[])

        function abrirModal(tipo, dados){
            setModalAberto(true)
            setTipoModal(tipo)
            setDadosModal(dados)
        }

        function fecharModal() {
            setModalAberto(false);
            setDadosModal({});
            setTipoModal("");
        }

        async function manipularPresenca(idEvento, presenca, idPresenca) {
            try {
                if (presenca && idPresenca != "") {
                    // atualizacao: situacao false
                    await api.put(`PresencasEventos/${idPresenca}`, {situacao: false});
                    Swal.fire('Removido!', 'Sua presenca foi removida.', 'success');
                }else if (idPresenca != "") {
                    //  atualizacao: situacao para true
                    await api.put(`PresencasEventos/${idPresenca}`,{situacao:true});
                    Swal.fire('Confirmado!', 'Sua presenca foi confirmada.', 'success');
                } else{
                    //  cadastrar uma nova presenca
                    await api.post("PresencasEventos", {situacao: true, idUsuaio: usuario.idUsuaio, idEvento: idEvento})
                    Swal.fire('Confirmado!', 'Sua presenca foi confirmada.', 'success');
                }
                listarEventos()
            } catch (error) {
              console.log(error); 
            }
        }

        function filtrarEventos() {
            const hoje = new Date();
            return listaEventos.filter(evento => {    
                const dataEvento = new Date(evento.dataEvento);

                if(filtroData.includes("todos")) return true;
                if(filtroData.includes("futuros") && dataEvento > hoje) return true;
                if(filtroData.includes("passados") && dataEvento < hoje) return true;
    
                return false;
            })
        }

        return(
            <>
            <Header/>
            <main className="main_lista_eventos layout-grid">
                <div className="titulo">
                    <h1>Eventos</h1>
                    <hr/>
                </div>
                <select onChange={(e) => setFiltroData([e.target.value])}>
                    <option value="todos" selected> todos os eventos</option>
                    <option value="futuros">Somente futuros</option>
                    <option value="passados">Somente passado</option>
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
                            filtrarEventos() && filtrarEventos().map((item) => (
                                <tr>
                                    <td>{item.nomeEvento}</td>
                                    {/* <td>{format(item.dataEvento, "dd/MM/yy")}</td> */}
                                    <td>{item.dataEvento}</td>
                                    <td>{item.tiposEvento.tituloTipoEvento}</td>
                                    <td><img className="icon" src={Descricao} onClick={() => abrirModal("descricaoEvento", {descricao: item.descricao})}alt="" /></td>
                                    <td><img className="icon" src={Comentario} onClick={() => abrirModal("comentarios", {idEvento: item.idEvento})} alt="" /></td>
                                    <td><label className="switch">
                                        <input type="checkbox" 
                                            checked={item.possuiPresenca}
                                            onChange={() => 
                                                manipularPresenca(item.idEvento, item.possuiPresenca, item.idPresenca)
                                            }/>
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
            {modalAberto && (
                <Modal
                    titulo={tipoModal == "descricaoEVento" ? "Decrição do Evento" : "Comentário"}
                    ModalTipo = {tipoModal}
                    idEvento = {dadosModal.idEvento}
                    descricao = {dadosModal.descricao}
                    fecharModal = {fecharModal}
                />
            )}
            </>
        )
}

export default ListagemEventos;