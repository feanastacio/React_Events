import Swal from 'sweetalert2'
import {useEffect, useState } from "react";

import api from "../../Services/Services.js";

import Lista from "../../components/lista/Lista";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Cadastro from "../../components/cadastro/Cadastro";
import banner_cadastro from "../../assets/images/bannerCadastroEventos.svg"
import "./CadastroEvento.css"


const CadastroEvento = () => {

    const [evento, setEvento] = useState("");
    const [listaEvento, setListaEvento] = useState([]);
    const [dataEvento, setDataEvento] = useState("");
    const [descricao, setDescricao] = useState("");
    const [instituicao, setInstituicao] = useState("9C52AD22-9005-4E92-9010-032A7249A353");
    const [tiposEvento, setTiposEvento] = useState([]);
    const [tipoEvento, setTipoEvento] = useState(""); 
    const [listaTipoEvento, setListaTipoEvento] = useState([])

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
                await api.post("Eventos", {nomeEvento: evento, idTipoEvento: tiposEvento, dataEvento: dataEvento, descricao: descricao, idInstituicao: instituicao} );
                alertar("success", "Cadastro do evento realizado!")
                setEvento("");
                setDataEvento();
                setDescricao("");
                setTiposEvento("");
                setInstituicao("");
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

    async function editarEvento(evento) {
        try {
            const tiposOptions = listaTipoEvento
            .map(tipo => `<option value="${tipo.idTipoEvento}" ${tipo.idTipoEvento === evento.idTipoEvento ? 'selected' : ''}>${tipo.tituloTipoEvento}</option>`)
            .join('');

            const { value } = await Swal.fire({
            title: "Editar Tipo de Evento",
            html: `
                <input id="campo1" class="swal2-input" placeholder="Título" value="${evento.nomeEvento || ''}">
                <input id="campo2" class="swal2-input" type="date" value="${evento.dataEvento?.substring(0, 10) || ''}">
                <select id="campo3" class="swal2-select">${tiposOptions}</select>
                <input id="campo4" class="swal2-input" placeholder="Categoria" value="${evento.descricao || ''}">
            `,
            showCancelButton: true,
            confirmButtonText: "Salvar",
            cancelButtonText: "Cancelar",
            focusConfirm: false,
            preConfirm: () => {
                const campo1 = document.getElementById("campo1").value;
                const campo2 = document.getElementById("campo2").value;
                const campo3 = document.getElementById("campo3").value;
                const campo4 = document.getElementById("campo4").value;

                if (!campo1 || !campo2 || !campo3 || !campo4) {
                Swal.showValidationMessage("Preencha todos os campos.");
                return false;
                }

                return { campo1, campo2, campo3, campo4 };
            }
            });

            if (!value) {
            console.log("Edição cancelada pelo usuário.");
            return;
            }

            console.log("Dados para atualizar:", value);

            await api.put(`eventos/${evento.idEvento}`, {
            nomeEvento: value.campo1,
            dataEvento: value.campo2,
            idTipoEvento: value.campo3,  
            descricao: value.campo4,
            });

            console.log("Evento atualizado com sucesso!");
            Swal.fire("Atualizado!", "Dados salvos com sucesso.", "success");
            listarEvento();

        } catch (error) {
            console.log("Erro ao atualizar evento:", error);
            Swal.fire("Erro!", "Não foi possível atualizar.", "error");
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

    async function listarTipoEvento() {
        try {
            const resposta = await api.get("TiposEventos");
            setListaTipoEvento(resposta.data);
        } catch (error) {
            console.log(error);
        }
    }

    async function verDescricao(evento) {
        try {
            
        } catch (error) {
            alert("bashedhfd")
        }
    }

    useEffect(() => {
        listarTipoEvento();
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
                funcCadastro={cadastrarEvento}     

                valorInput={evento}
                setValorInput={setEvento}

                valorDate={dataEvento}
                setValorDate={setDataEvento}      

                valorSelectt={tiposEvento}
                setValorSelectt={setTiposEvento}

                valorText={descricao}
                setValorText={setDescricao}

                valorSelect={instituicao}
                setValorSelect={setInstituicao}
                nomes="Nome"
        
                lista={listaTipoEvento}
            />

            <Lista
                titulo_lista="de Eventos"
                titulo="Nome"
                tipoLista="TiposEventos"
                lista={listaEvento}
                dataEvento={dataEvento}
                funcExcluir={excluirEvento}
                funcEditar={editarEvento}
                funcVerDescricao={verDescricao}
            />
            <Footer />
        </>
    )
}
export default CadastroEvento;