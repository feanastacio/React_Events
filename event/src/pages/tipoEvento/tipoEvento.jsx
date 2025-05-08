import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Cadastro from "../../components/cadastro/Cadastro";
import banner_cadastrotipoevento from "../../assets/images/bannerTipoEvento.svg"
import "./TipoEvento.css"

const TipoEvento = () => {
    return(
        <>
        <Header/>           
        <Cadastro
        img_banner={banner_cadastrotipoevento}
        tituloCadastro = "Cadastro Tipo de Evento"
        nomes="Título"
        visible="none"
        />
        <Footer/>
        </>
    )
}

export default TipoEvento;