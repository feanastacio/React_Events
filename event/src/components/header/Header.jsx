import "./Header.css";
import Logo from "../../assets/images/logo1.svg"
import Adm from "../../assets/images/Vector.svg"

const Header = () =>{
    return(
        <header>
            <div className="layout_grid cabecalho">
            {/* /* ao clicar no link redireciona para tela Login */}
            <img src= {Logo} alt= "Logo do Event" />
            
            <nav className="nav_header">
            
            <a className= "link_header" href="https://github.com/feanastacio/React_Events/tree/main">Home</a>
            <a className= "link_header" href="https://github.com/feanastacio/React_Events/tree/main">Eventos</a>
            <a className= "link_header" href="https://github.com/feanastacio/React_Events/tree/main">Usuarios</a>
            <a className= "link_header" href="https://github.com/feanastacio/React_Events/tree/main">Contatos</a>
            </nav>

            <a className= "link_header" href="https://github.com/feanastacio/React_Events/tree/main">Administrador</a>
            <img src= {Adm} alt="Simbolo Adm" />

     </div>
</header>
    )
}

export default Header;