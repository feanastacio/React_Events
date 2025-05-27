import Editar from "../../assets/images/editar.svg";
import Excluir from "../../assets/images/excluir.svg";
import "./Lista.css";

const Lista = (props) => {
    return(
        <section className="listagem">
            <h1>{props.nomeLista}</h1>
            <hr/>
            <div className="layout_grid tabela">
                <table>   
                    <thead>
                        <tr className="tabela_cabecalho">
                            <th>{props.Titulo}</th>
                            <th>Data evento</th>
                            <th style={{display:props.visible}}>Tipo Evento</th>
                            <th>Editar</th>
                            <th>Deletar</th>
                            <th>Descrição</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.lista && props.lista.length > 0 ?(
                            props.lista.map((item) => (
                            <tr className="item_lista" key={props.tipoLista == "TiposEventos" ? item.idTipoEvento : item.idTipoUsuario}> {/*metodo de fazer uma condição para exibir informações necessárias*/}
                                <td data-cell="Nome">
                                    {props.tipoLista == "TiposEventos" ? item.tituloTipoEvento : item.tituloTipoUsuario} {/*metodo de fazer uma condição para exibir informações necessárias*/}
                                </td>
                                <td style={{display:props.visible}} data-cell="Tipo Evento"></td>
                                <td data-cell="Editar"><img src={Editar} alt="Caneta" onClick={()=> (props.funcEditar(item))} /></td>
                                <td data-cell="Excluir"><img src={Excluir} alt="Lixeira" onClick={()=> (props.funcExcluir(item))}/></td>
                            </tr>
                            ))): 
                            (
                                <p>Nenhum evento cadastrado!</p>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </section>
    )
}
export default Lista;