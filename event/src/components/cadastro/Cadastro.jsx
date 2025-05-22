import Botao from "../botao/Botao";
import "./Cadastro.css"

const Cadastro = (props) => {
    return(
        <section>
            <form onSubmit={props.funcCadastro} action="" className="layout_grid  form_cadastro" >
                <h1>{props.tituloCadastro}</h1>
                <hr /> 
                <div className="campos_cadastro">
                    <div className="banner_cadastro">
                        <img src={props.img_banner} alt="" />
                    </div>
                    <div className="campo_preenchido">
                        <div className="campos_cad_nome">
                            <label htmlFor=""></label>
                                <input type="text" name="Nome" placeholder={props.nomes}
                                    value={props.valorInput}
                                    onChange={(e) => props.setValorInput(e.target.value)}
                                />                               
                        </div>
                        <div className="campos_cad_evento" style={{display: props.visible}}>
                            <label htmlFor="evento"></label>
                            <select name="evento" id="">
                                <option value="" disabled selected>Tipo Evento</option>
                                <option value="">evento1</option>
                                <option value="">evento2</option>
                                <option value="">evento3</option>
                            </select>
                        </div>
                        <Botao nomeDoBotao="Cadastrar"/>
                    </div>
                </div>
            </form>
        </section>
    )
}
export default Cadastro;