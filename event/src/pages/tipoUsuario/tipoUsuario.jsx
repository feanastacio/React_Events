import Lista from "../../components/lista/Lista";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Cadastro from "../../components/cadastro/Cadastro";
import banner_cadastro from "../../assets/images/bannerTipoUsuario.svg"
import "./TipoUsuario.css"
import { useState } from "react";

const TipoUsuario = () => {

    const[tipoUsuario, setTipoUsuario] = useState("");
    const[listaTipoUsuario, setListaTipoUsuario] = useState("");

    function alertar(icone, mensagem) {
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

    async function cadastrarTipoUsuario(tpu) {
        tpu.preventDefault();
        if (TipoUsuario.trim() !== "") {
            try {
                await api.post("tiposUsuarios", {tituloTipoUsuario: tipoUsuario});
                alertar("success","Cadastro do usuário foi realizado com sucesso!")
                setTipoUsuario("");
            } catch (error) {
                console.log(error);
            }
        }
    }

    return (
        <>
            <Header
                visibilidade="none"
            />
            <Cadastro
                img_banner={banner_cadastro}
                tituloCadastro="Cadastro Tipo de Usuário"
                nomes="Nome"
                visible="none"
            />
            <Lista
                nomeLista="Lista Tipo de Usuario"
                Titulo="Titulo"
                visible="none"
                visibilidade="none"
            />
            <Footer />
        </>
    )
}
export default TipoUsuario;