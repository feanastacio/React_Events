import Swal from 'sweetalert2'
import {useEffect, useState } from "react";

import api from "../../Services/Services";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Cadastro from "../../components/cadastro/Cadastro";
import banner_cadastrotipoevento from "../../assets/images/bannerTipoEvento.svg";
import Lista from "../../components/lista/Lista";
import "./TipoEvento.css"

const TipoEvento = () => {
    const [tipoEvento, setTipoEvento] = useState("");
    const [listaTipoEvento, setListaTipoEvento] = useState([]);

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

    async function cadastrarTipoEvento(tpe) {
        tpe.preventDefault();
        if (tipoEvento.trim() !== "") {
            try {
                await api.post("tiposEventos", {tituloTipoEvento: tipoEvento});
                alertar("success","Cadastro realizado com sucesso!")
                setTipoEvento("");
            } catch (error) {
                console.log(error);  
            } 
        } else{
            alertar("error","Erro! Preencha os campos.")
        }    
    }

    async function listarTipoEvento() {
        try {
            const resposta = await api.get("tiposEventos") 
            setListaTipoEvento(resposta.data);
            listaTipoEvento("");
        } catch (error) {
            console.log(error);
        }
    }

    async function editarTipoEvento(tipoEvento) {
        const { value: novoTipoEvento } = await Swal.fire({
            title: "Modifique o tipo de evento: ",
            input: "text",
            inputLabel: "Novo tipo de evento",
            inputValue: tipoEvento.tituloTipoEvento, 
            showCancelButton: true,
            inputValidator: (value) => {
                if (!value) {
                    return "Esse campo precisa estar preenchido!";
                }
            }
        });
        if (novoTipoEvento) {
            try {
                api.put(`tiposEventos/${tipoEvento.idTipoEvento}`, {tituloTipoEvento: novoTipoEvento});
                Swal.fire(`O tipo do evento foi modificado ${novoTipoEvento}`);
                listaTipoEvento();
            } catch (error) {
                console.log(error);
            }
        }
    }

    async function excluirTipoEvento(tiposEventos) {
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
                    await api.delete(`tiposeventos/${tiposEventos.idTipoEvento}`);
                    alertar("success", "Tipo do evento excluido com sucesso!")
                    listaTipoEvento();
                } catch (error) {
                    console.log(error);
                }
            }
        });
    }

    useEffect(() => {
        listarTipoEvento();
    },[listaTipoEvento]);
    
    return (
        <>
            <Header
                visibilidade="none"
            />
            <Cadastro
                img_banner={banner_cadastrotipoevento}
                funcCadastro={cadastrarTipoEvento}
                valorInput={tipoEvento}
                setValorInput={setTipoEvento}
                tituloCadastro="Cadastro Tipo de Evento"
                nomes="Título"
                visible="none"
                visibilidade="none"
            />
            <Lista
                nomeLista="Lista Tipo de Eventos"
                Titulo="Titulo"
                visible="none"
                visibilidade="none"
                tipoLista="TiposEventos"
                lista={listaTipoEvento}
                funcEditar={editarTipoEvento}
                funcExcluir={excluirTipoEvento}
            />
            <Footer />
        </>
    )
}

export default TipoEvento;