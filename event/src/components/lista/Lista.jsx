import Editar from "../../assets/images/editar.svg";
import Deletar from "../../assets/images/excluir.svg";
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
                        <tr className="item_lista">
                            <td data-cell={props.TituloTipoevento}>abc</td>
                            <td style={{display:props.visibilidade}} data-cell="">abc</td>
                            <td data-cell="Editar"><img src={Editar} alt="Caneta" /></td>
                            <td data-cell="Deletar"><img src={Deletar} alt="Lixinho" /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    )
}
export default Lista;