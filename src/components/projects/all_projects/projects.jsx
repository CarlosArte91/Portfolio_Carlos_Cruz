import projects from "../../../assets/data/projects.js";
import Project from "../template/project";
import styles from "./projects.module.css";

function Projects() {
    return (
        <div className={styles.container} id="projects">
            <h2 className={styles.title}>Proyectos</h2>
            {
                projects.length && projects.map((project) => {
                    return (
                        <Project
                            name={project.name}
                            description={project.description}
                            video={project.video}
                            deploy={project.deploy}
                            github={project.github}
                            key={project.name}                        
                        />
                    );
                })
            }
        </div>
    );
};

export default Projects;