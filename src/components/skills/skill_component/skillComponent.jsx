import TechSkills from "../tech/all_tech_skills/techSkills";
import styles from './skillComponent.module.css';

function SkillComponent() {
    return (
        <div className={styles.container}>
            <TechSkills/>
        </div>
    );
};

export default SkillComponent;