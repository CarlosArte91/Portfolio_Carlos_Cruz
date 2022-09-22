import logo from '../../../assets/images/brand/icon.png';
import styles from './navbar.module.css';

function Navbar() {
    return (
        <div className={styles.container}>
            <a href="#home"><img src={logo} alt="logo" /></a>            
            <ul>
                <li><a href="#home">Inicio</a></li>
                <li><a href="#projects">Proyectos</a></li>
                <li><a href="#skills">Habilidades</a></li>
                <li><a href="#contact">Contacto</a></li>
            </ul>
        </div>
    );
};

export default Navbar;