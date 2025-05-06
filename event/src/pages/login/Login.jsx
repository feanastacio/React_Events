import Botao from "../../components/botao/Botao"
import Logo from "../../assets/images/logo1.svg"
import "./Login.css"

const Login = () => {
    return(
        <main className="main_login">
        <div className="banner"></div>
        <section className="section_login">
            <img src={Logo} alt="Logo Events+"/>
            <form action="" className="form_login">
                <div className="inputs_login">
                    <div className="input_login">
                        <label htmlFor="email"></label>
                        <input type="email" name="email" placeholder="Username"/>
                        <hr />
                    </div>
                    <div className="input_login">
                        <label htmlFor="senha"></label>
                        <input type="passoword" name="senha" placeholder="Passoword"/>
                        <hr />
                    </div>
                    <div className="esqueceu_senha">
                     <a href="">Esqueceu sua senha?</a>
                    </div>
                </div>
                <Botao nomeDoBotao="Login"/>
            </form>
        </section>
        </main>
    )
}
export default Login;