import profileImage from '../../assets/images/profile/profile.JPG';
import Socials from '../contact/socials/socials';
import styles from './profile.module.css';

function Profile() {
    return (
        <div className={styles.container}>
            <h1 className={styles.name}>Carlos Cruz</h1>
            <h2 className={styles.profession}>Full Stack Web Developer</h2>            
            <p></p>
            <img className={styles.profileImage} src={profileImage} alt="profile" />
            <div className={styles.socials}><Socials/></div>            
        </div>
    );
};

export default Profile;