import projects from "../../../assets/data/projects.js";
import Project from "../template/project";

function Projects() {
    console.log(projects);
    return (
        <div>
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