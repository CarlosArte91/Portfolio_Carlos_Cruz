import styles from './softSkill.module.css';

function SoftSkill({ name, image }) {
    return (
        <div className={styles.container}>
            <img src={image} alt="soft skill" />
            <span>{name}</span>
        </div>
    );
};

export default SoftSkill;