import linkedin from '../../../assets/images/contact/linkedin.png';
import github from '../../../assets/images/contact/github.png';
import twitter from '../../../assets/images/contact/twitter.png';
import styles from './socials.module.css';

function Socials() {
    return (
        <div className={styles.container}>
            <ul>
                <li>
                    <a href="https://www.linkedin.com/in/carlos-cruz-870119204" target="_blank">
                        <img src={linkedin} alt="linkedin" />
                    </a>
                </li>
                <li>
                    <a href="https://www.github.com/CarlosArte91" target="_blank">
                        <img src={github} alt="github" />
                    </a>
                </li>
                <li>
                    <a href="https://www.github.com/CarlosArte91" target="_blank">
                        <img src={twitter} alt="twitter" />
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Socials;