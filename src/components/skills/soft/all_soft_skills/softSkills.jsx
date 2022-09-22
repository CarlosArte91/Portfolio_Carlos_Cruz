import styles from "./softSkills.module.css";
import softSkills from '../../../../assets/data/softSkills.js';
import SoftSkill from "../template/softSkill";
import { learnSoft } from '../../../../assets/data/aboutMe.js';

function SoftSkills() {
    return (
        <>
            <h2 className={styles.title}>Habilidades blandas</h2>
            <p className={styles.learn}>{learnSoft}</p>
            <div className={styles.container}>                
                {
                    softSkills.length && softSkills.map((skill) => {
                        return (
                            <SoftSkill
                                name={skill.name}
                                image={skill.image}
                                key={skill.name}
                            />
                        );
                    })
                }
            </div>
        </>
    );
};

export default SoftSkills;