import Editar from "../../assets/images/editar.svg";
import Deletar from "../../assets/images/excluir.svg";
import "./Lista.css";

const Lista = (props) => {
    return(
        <section className="layout_grid lista">
            <h1>{props.nomeLista}</h1>
            <hr/>
            <div className="tabela">
                <table>   
                    <h1>Lista de Eventos</h1>           
                    <thead>
                        <tr className="cabecalho">
                            <th>Nome</th>
                            <th style={{display:props.visible}} >Tipo de Evento</th>
                            <th>Editar</th>
                            <th>Deletar</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="nome_evento">
                            <td data-cell="Nome">evento1</td>
                            <td style={{display:props.visible}} data-cell="Tipo Evento">Social</td>
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