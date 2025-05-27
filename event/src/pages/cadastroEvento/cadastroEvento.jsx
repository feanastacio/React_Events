import Swal from 'sweetalert2'
import {useEffect, useState } from "react";

import api from "../../Services/Services";

import Lista from "../../components/lista/Lista";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Cadastro from "../../components/cadastro/Cadastro";
import banner_cadastro from "../../assets/images/bannerCadastroEventos.svg"
import "./CadastroEvento.css"


const CadastroEvento = () => {

    const [evento, setEvento] = useState("");
    const [listaEvento, setListaEvento] = useState([]);

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

    async function cadastrarEvento(evt){
        evt.preventDefault();
        if (evento.trim() !== "") {
            try {
                await api.post("Eventos", {nomeEvento: evento});
                alertar("success", "Cadastro do evento realizado!")
                setEvento("");
            } catch (error) {
                console.log(error);
            }
        } else{
            alertar("error","Erro!Preencha os campos.")
        }
    }

    async function listarEvento(){
        try {
            const resposta = await api.get("Eventos")
            setListaEvento(resposta.data);
            listaEvento("");
        } catch (error) {
            console.log(error);
        }
    }

    async function editarEvento(evento){
        const {value: novoEvento } = await Swal.fire({
            title: "Modifique o Evento:",
            input: "text",
            inputLabel: "Novo evento",
            inputValue: evento.nomeEvento,
            showCancelButton: true,
            inputValidator: (value) => {
                if (!value) {
                    return "Esse campo precisa estar preenchido!"
                }
            }
        });
        if (novoEvento) {
            try {
                api.put(`Eventos/${evento.idEvento}`, {nomeEvento: novoEvento});
                Swal.fire(`O evento foi modificado ${novoEvento}`);
                listaEvento();
            } catch (error) {
                console.log(error);
            }
        }
    }

    async function excluirEvento(eventos){
        Swal.fire({
            title:"Você tem certeza?",
            text: "Você não vai conseguir reverter isso!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Sim, quero deletar!"
        }).then(async(result) => {
            if (result.isConfirmed) {
                try {
                    await api.delete(`Eventos/${eventos.idEvento}`);
                    alertar("success", "O evento foi excluido com sucesso!")
                    listaEvento();
                } catch (error) {
                    console.log(error);
                }
            }
        })
    }

    useEffect(() => {
        listarEvento();
    },[listaEvento]);

    return (
        <>
            <Header
                visibilidade="none"
            />
            <Cadastro
                tituloCadastro="Cadastro de Evento"
                img_banner={banner_cadastro}
                funcCadasro={cadastrarEvento}
                valorInput={evento}
                setValorInput={setEvento}
                valorSelectt
                valorDate
                setValorText
                nomes="Nome"
                visible
            />
            <Lista
                nomeLista="Lista Tipo de Eventos"
                Titulo="Nome"
                Titulo_Tipoevento=""
                tipoLista="TiposEventos"
                lista={listaEvento}
                funcExcluir={excluirEvento}
                funcEditar={editarEvento}
            />
            <Footer />
        </>
    )
}
export default CadastroEvento;