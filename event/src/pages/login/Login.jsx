import Botao from "../../components/botao/Botao"
import Logo from "../../assets/images/logo1.svg"
import api from "../../Services/Services.js"
import { useEffect, useState } from "react";
import "./Login.css"
import { userDecodeToken } from "../../auth/Auth.js";
import secureLocalStorage from "react-secure-storage";
import Swal from "sweetalert2";

import { useNavigate } from "react-router-dom";

const Login = () => {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const navigate = useNavigate();

    async function realizarAutentificacao(e) {
        e.preventDefault();
        const usuario = {
            email: email,
            senha: senha
        }
        if(senha.trim() != "" || email.trim() !=""){
            try {
                const resposta = await api.post("Login", usuario);
                
                const token = resposta.data.token;

                if(token){
                    // token sera decscodificado
                    const tokenDecodificado = userDecodeToken(token);

                    secureLocalStorage.setItem("tokenLogin", JSON.stringify(tokenDecodificado)); //ele esta pegando essa informacao e armazenando no estilo JSON

                    if (tokenDecodificado.tipoUsuario === "aluno") {
                        // redirecionar a tela de listagem de eventos (aluno)
                        navigate("/ListagemEventos")

                    } else{
                        // vai encaminhar para tela de cadastro de eventos (adm)
                        navigate("/Evento")
                    }
                }

            } catch (error) {
                console.log(error);
                alertar("error", "Email ou senha invalidos! Para duvidas, entre em contato com o suporte.")
            }
        }else{
            alertar("error", "Preencha os campos vazios!")
        }
            
    }

    function alertar(icone, mensagem){
        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
            }
        });
        Toast.fire({
            icon: icone,
            title: mensagem
        });
    }

    return (
        <main className="main_login">
            <div className="banner"></div>
            <section className="section_login">
                <img src={Logo} alt="Logo Events+" />
                <form action="" className="form_login" onSubmit={realizarAutentificacao}>
                    <div className="inputs_login">
                        <div className="input_login">
                            <label htmlFor="email"></label>
                            <input type="email" 
                            name="email" 
                            placeholder="Username" 
                            value={email} 
                            onChange={(e)=>setEmail(e.target.value)}/>
                            {/* <hr />  */}
                        </div>
                        <div className="input_login">
                            <label htmlFor="senha"></label>
                            <input type="password" 
                            name="senha" 
                            placeholder="Password" 
                            value={senha} 
                            onChange={(e)=>setSenha(e.target.value)}/>
                            {/* <hr /> */}
                        </div>
                        <div className="esqueceu_senha">
                            <a href="">Esqueceu sua senha?</a>
                        </div>
                    </div>
                    <Botao nomeDoBotao="Login" />
                </form>
            </section>
        </main>
    )
}
export default Login;