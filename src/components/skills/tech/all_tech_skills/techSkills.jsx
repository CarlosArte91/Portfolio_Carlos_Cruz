import techSkills from "../../../../assets/data/techSkills";
import TechSkill from "../template/techSkill";

function TechSkills() {
    return (
        <div>
            {
                techSkills.length && techSkills.map((skill) => {
                    return (
                        <TechSkill
                            name={skill.name}
                            image={skill.image}
                        />
                    );
                })
            }
        </div>
    );
};

export default TechSkills;