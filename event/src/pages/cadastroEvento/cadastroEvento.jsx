import Lista from "../../components/lista/Lista";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Cadastro from "../../components/cadastro/Cadastro";
import banner_cadastro from "../../assets/images/bannerCadastroEventos.svg"
import "./CadastroEvento.css"

const cadastroEvento = () => {
    return(
        <>
        <Header/>           
        <Cadastro
        img_banner={banner_cadastro}
        tituloCadastro = "Cadastro de Evento"
        nomes="Nome"
        visible
        />
        <Lista
        nomeLista="Lista Tipo de Eventos"
        Titulo="Nome"
        Titulo_Tipoevento=""
        />
        <Footer/>
        </>
    )
}
export default cadastroEvento;