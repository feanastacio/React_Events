import Swal from 'sweetalert2'
import {useEffect, useState } from "react";
import api from "../../Services/Services";

import Lista from "../../components/lista/Lista";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Cadastro from "../../components/cadastro/Cadastro";
import banner_cadastro from "../../assets/images/bannerTipoUsuario.svg"
import "./TipoUsuario.css"


const TipoUsuario = () => {

    const[tipoUsuario, setTipoUsuario] = useState("");
    const[listaTipoUsuario, setListaTipoUsuario] = useState([]);

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
        if (tipoUsuario.trim() !== "") {
            try {
                await api.post("tiposUsuarios", {tituloTipoUsuario: tipoUsuario});
                alertar("success","Cadastro do usuário foi realizado com sucesso!")
                setTipoUsuario("");
            } catch (error) {
                console.log(error);
            }
        } else{
            alertar("error","Erro! Preencha os campos.")
        }
    }

    async function listarTipoDeUsuario(){
        try {
            const resposta = await api.get("tiposUsuarios");
            setListaTipoUsuario(resposta.data);
            listaTipoUsuario("");
        } catch (error) {
            console.log(error);
        }
    }

    async function editarTipoUsuario(tipoUsuario){
        const {value: novoTipoUsuario} = await Swal.fire({
            title: "Modifique o tipo de usúario: ",
            input: "text",
            inputLabel: "Novo tipo de usúario",
            inputValue: tipoUsuario.tituloTipoUsuario,
            showCancelButton: true,
            inputValidator: (value) => {
                if (!value) {
                    return "Esse campo precisa estar preenchido!";
                }
            }
        });
        if (novoTipoUsuario) {
            try {
                api.put(`tiposUsuarios/${tipoUsuario.idTipoUsuario}`, {tituloTipoUsuario: novoTipoUsuario});
                Swal.fire(`O tipo de usúario foi modificado ${novoTipoUsuario}`);
                listaTipoUsuario();
            } catch (error) {
                console.log(error);
            }
        }
    }

    async function excluirTipoUsuario(tiposUsuarios) {
        Swal.fire({
            title: "Você tem certeza?",
            text: "Você não vai conseguir reverter isso!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Sim, quero deletar!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    await api.delete(`tiposusuarios/${tiposUsuarios.idTipoUsuario}`);
                    alertar("success", "Tipo de usuário foi excluído com sucesso!")
                    listaTipoUsuario();
                } catch (error) {
                    console.log(error);
                }
            }
        });
    }

    useEffect(() => {
        listarTipoDeUsuario();
    },[listaTipoUsuario]);

    return (
        <>
            <Header
                visibilidade="none"
            />
            <Cadastro
                img_banner={banner_cadastro}
                funcCadastro={cadastrarTipoUsuario}
                valorInput={tipoUsuario}
                setValorInput={setTipoUsuario}
                tituloCadastro="Cadastro Tipo de Usuário"
                nomes="Nome"
                // visible="none"
                visibilidade="none"
            />
            <Lista
                titulo_lista="Tipo de Usuario"
                titulo="Titulo"
                // visible="none"
                // visible1="none"
                visibilidade="none"
                lista={listaTipoUsuario}
                funcEditar={editarTipoUsuario}
                funcExcluir={excluirTipoUsuario}
            />
            <Footer />
        </>
    )
}
export default TipoUsuario;