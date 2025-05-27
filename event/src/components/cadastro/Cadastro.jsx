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

                        <div className="campo_cad_data" style={{display: props.visibilidade}}>
                            <input type="date" 
                                value={props.valorDate}
                                onChange={(e) => props.setValorDate(e.target.value)}
                                placeholder="Data do Evento"
                            />
                        </div>

                        <div className="campos_cad_tipoevento" style={{display: props.visible}}>
                            <label htmlFor="evento"></label>
                            <select name="Tipo de evento" id="">
                                <option value="" disabled selected>Tipo Evento</option>
                                <option value="">123</option>
                                {props.lista && props.lista.length > 0 && props.lista.map((itemTipoEvento) =>
                                (
                                    <option value={itemTipoEvento.idTipoEvento}>{itemTipoEvento.tituloTipoEvento}</option>                                                             
                                ))}
                            </select>
                        </div>

                        <div className="campo_cad_instituicao" style={{display:props.visibilidade}}>
                            <select name="Instituição" id=""
                                value={props.valorSelectt}
                                onChange={(e) => props.setValorText(e.target.value)}
                            >
                                <option value="" disabled selected>Instituição</option>
                                <option value="">PingPong</option>
                            </select>
                        </div>

                        <div className="campo_cad_descricao" style={{display:props.visibilidade}}>
                            <textarea name="" id="" placeholder="Descrição"></textarea>
                        </div>
                        <Botao nomeDoBotao="Cadastrar"/>
                    </div>
                </div>
            </form>
        </section>
    )
}
export default Cadastro;