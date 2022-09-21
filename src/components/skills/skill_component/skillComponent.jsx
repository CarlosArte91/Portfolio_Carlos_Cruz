import SoftSkills from "../soft/all_soft_skills/softSkills";
import TechSkills from "../tech/all_tech_skills/techSkills";
import styles from './skillComponent.module.css';

function SkillComponent() {
    return (
        <div className={styles.container} id="skills">
            <TechSkills/>
            <SoftSkills/>
        </div>
    );
};

export default SkillComponent;