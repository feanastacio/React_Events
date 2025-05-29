import Botao from "../botao/Botao";
import "./Cadastro.css"

const Cadastro = (props) => {
    return(
        <section>
            <form onSubmit={props.funcCadastro} action="" className="layout_grid  form_cadastro" >
                <h1>{props.tituloCadastro}</h1>
                <hr/> 
                <div className="campos_cadastro">
                    <div className="banner_cadastro">
                        <img src={props.img_banner} alt="" />
                    </div>
                    <div className="campo_preenchido">
                        <div className="campos_cad_nome">
                            <label htmlFor=""></label>
                                <input 
                                    type="text" 
                                    name="Nome" 
                                    placeholder={props.nomes}
                                    value={props.valorInput}
                                    onChange={(e) => props.setValorInput(e.target.value)}
                                />                               
                        </div>

                        <div className="todos_campos" style={{display: props.visibilidade}}>

                            <div className="campo_cad_data">
                                <input type="date" 
                                    style={{display: props.data}}
                                    value={props.valorDate}
                                    onChange={(e) => props.setValorDate(e.target.value)}
                                />
                            </div>

                            <div className="campos_cad_tipoevento">
                                <label htmlFor="Nome"></label>
                                <select name="Tipo de evento" id="" className="select_cad"
                                    onChange={(e) => props.setValorSelectt(e.target.value)}
                                >
                                    <option value="" disabled selected>Tipo Evento</option>
                                    {props.lista && props.lista.length > 0 && props.lista.map((itemTipoEvento) =>
                                    (
                                        <option value={itemTipoEvento.idTipoEvento}>{itemTipoEvento.tituloTipoEvento}</option>                                                             
                                    ))}
                                </select>
                            </div>

                            <div className="campo_cad_instituicao">
                                <select name="" id=""
                                    value={props.valorSelect}
                                    onChange={(e) => props.setValorText(e.target.value)}
                                >
                                    <option disabled selected value="">Senai</option>                                   
                                </select>
                            </div>

                            <div className="campo_cad_descricao">
                                <textarea name="" id="" placeholder="Descrição" 
                                    style={{display: props.descricao}}
                                    value={props.valorText}
                                    onChange={(e) => props.setValorText(e.target.value)}
                                ></textarea>
                            </div>
                        </div>
                        <Botao nomeDoBotao="Cadastrar"/>
                    </div>
                </div>
            </form>
        </section>
    )
}
export default Cadastro;