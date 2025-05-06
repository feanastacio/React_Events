import "./Cadastro.css"

const Cadastro = (props) => {
    return(
        <section>
            <form action="" className="layout_grid  form_cadastro" >
                <h1>{props.tituloCadastro}</h1>
                <hr /> 
            </form>
        </section>
    )
}
export default Cadastro;