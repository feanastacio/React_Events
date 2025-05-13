import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Cadastro from "../../components/cadastro/Cadastro";
import banner_cadastrotipoevento from "../../assets/images/bannerTipoEvento.svg";
import Lista from "../../components/lista/Lista";
import "./TipoEvento.css"

const TipoEvento = () => {
    return (
        <>
            <Header
                visibilidade="none"
            />
            <Cadastro
                img_banner={banner_cadastrotipoevento}
                tituloCadastro="Cadastro Tipo de Evento"
                nomes="Título"
                visible="none"
            />
            <Lista
                nomeLista="Lista Tipo de Eventos"
                Titulo="Titulo"
                visible="none"
                visibilidade="none"
            />
            <Footer />
        </>
    )
}

export default TipoEvento;