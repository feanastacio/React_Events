import Botao from "../../components/botao/Botao";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Banner from "../../assets/images/bannerTipoEvento.svg"
import "./TipoEvento.css"

const TipoEvento = () => {
    return(
        <>
        <Header/>
        <main className="layout-grid main_tipo_evento">             
            <section className="section_tipo_evento">
            <form action="" className="form_tipo_evento">
                <div className="filho_form">
                    <h1>Cadastro Tipo de Eventos</h1>
                    <hr />
                    <img src={Banner} alt="" />
                    <div className="cadastro_evento">
                    <input type="text" name="nomeEvento" placeholder="Título"/>
                    </div>
                    <Botao nomeDoBotao="Cadastrar"/>
                </div>
            </form>
            </section>  
        </main>
        <Footer/>
        </>
    )
}

export default TipoEvento;