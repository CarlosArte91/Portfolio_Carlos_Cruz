import techSkills from "../../../../assets/data/techSkills";
import TechSkill from "../template/techSkill";
import styles from "./techSkills.module.css";

function TechSkills() {
    return (
        <>
            <h2 className={styles.title}>Habilidades técnicas</h2>
            <div className={styles.container}>                
                {
                    techSkills.length && techSkills.map((skill) => {
                        return (
                            <TechSkill
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

export default TechSkills;