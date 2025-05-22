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
                            <th style={{display:props.visible}}>Tipo Evento</th>
                            <th>Editar</th>
                            <th>Deletar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.lista && props.lista.length > 0 ?(
                            props.lista.map((item) => (
                            <tr className="item_lista" key={item.idTipoevento}>
                                <td data-cell={props.titulo}>{item.tituloTipoEvento}</td>
                                <td style={{display:props.visibilidade}} data-cell="">abc</td>
                                <td data-cell="Editar"><img src={Editar} alt="Caneta" onClick={()=> (props.funcEditar(item))} /></td>
                                <td data-cell="Excluir"><img src={Excluir} alt="Lixeira" onClick={()=> (props.funcExcluir(item))}/></td>
                            </tr> ))
                            ) : 
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