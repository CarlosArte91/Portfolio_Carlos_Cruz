import ReactPlayer from 'react-player';
import styles from './project.module.css';

function Project({ name, description, video, deploy, github }) {
    return (
        <div className={styles.container}>
            <h3>{name}</h3>
            <p>{description}</p>
            <div className={styles.links}>
                <a href={deploy} target="_blank">deploy</a>
                <a href={github} target="_blank">repositorio</a>
            </div>
            <div className={styles.video}>
                <ReactPlayer
                    url={video}
                    controls
                    width="100%"                    
                    height="100%"
                />
            </div>
        </div>
    );
};

export default Project;