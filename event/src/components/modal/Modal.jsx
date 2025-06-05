import "./Modal.css"
import api from "../../Services/Services.js";
import React, { useEffect, useState } from 'react';
import ImgDeletar from "../../assets/images/ImgDeletar.svg"

const Modal = (props) => {

    const [comentarios, setComentarios] = useState([]);
    const [novoComentario, setNovoComentario] = useState("");
    const [usuarioId, setUsuarioId] = useState("0CE974E0-6D5C-41D1-BA9C-BEBED37B9FFB");

    async function listarComentarios() {
        try {
            const resposta = await api.get(`ComentariosEventos/ListarSomenteExibe?id=${props.idEvento}`)
            setComentarios(resposta.data)
        } catch (error) {
            console.log(error);
        }
    }

    async function cadastrarComentario(comentario) {
        try {
            await api.post("ComentariosEventos",{idUsuario: usuarioId,
                idEvento: props.idEvento, 
                descricao: comentario})
        } catch (error) {
            console.log(error);
        }
    }

    async function deletarComentario(idComentario) {
        try {
            await api.delete(`ComentariosEventos/${idComentario}`);
        } catch (error) {
            console.log(error); 
        }
    }

    useEffect(() => {
        listarComentarios();
    },[])

    return (
        <>
            <div className='model-overlay' onClick={props.fecharModal}></div>
            <div className='model'>
                <h1>{props.titulo}</h1>
                <div className='model_conteudo'>
                    {props.ModalTipo === "descricaoEvento" ? (
                        <p>{props.descricao}</p>
                    ):(
                        <>
                            {comentarios.map((item) => (
                                <div key={item.idComentarioEvento}>
                                    <strong>{item.usuario.nomeUsuario}</strong>
                                    <img src={ImgDeletar} alt="Deletar" onClick={() => deletarComentario(item.idComentarioEvento)}/>
                                    <p>{item.descricao}</p>
                                    <hr/>
                                </div>
                            ))}
                            <div>
                                <input type="text" placeholder='Escreva seu comentário...'
                                value={novoComentario}
                                onChange={(e) => setNovoComentario(e.target.value)}
                                />
                                <button onClick={() => cadastrarComentario(novoComentario)}>
                                    Cadastrar
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    )
}

export default Modal;
