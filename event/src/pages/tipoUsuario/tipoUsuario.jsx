import Lista from "../../components/lista/Lista";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Cadastro from "../../components/cadastro/Cadastro";
import banner_cadastro from "../../assets/images/bannerTipoUsuario.svg"
import "./TipoUsuario.css"

const TipoUsuario = () => {
    return(
        <>
        <Header/>           
        <Cadastro
        img_banner={banner_cadastro}
        tituloCadastro = "Cadastro Tipo de Usuário"
        nomes="Nome"
        visible="none"
        />
        <Lista/>
        <Footer/>
        </>
    )
}
export default TipoUsuario;