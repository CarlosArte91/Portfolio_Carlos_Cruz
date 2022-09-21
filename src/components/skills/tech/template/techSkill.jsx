import styles from './techSkill.module.css';

function TechSkill({ name, image }) {
    return (
        <div className={styles.container}>
            <img src={image} alt="tech skill" />
            <span>{name}</span>
        </div>
    );
};

export default TechSkill;