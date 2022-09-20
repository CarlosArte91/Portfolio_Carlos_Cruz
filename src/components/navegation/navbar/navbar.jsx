import logo from '../../../assets/images/brand/icon.png';
import styles from './navbar.module.css';

function Navbar() {
    return (
        <div className={styles.container}>
            <img src={logo} alt="logo" />
            <ul>
                <li><a href="#projects">Proyectos</a></li>
                <li><a href="#">Habilidades</a></li>
                <li><a href="#">Contacto</a></li>
            </ul>
        </div>
    );
};

export default Navbar;