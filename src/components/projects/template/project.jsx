import ReactPlayer from 'react-player';

function Project({ name, description, video, deploy, github }) {
    return (
        <>
            <h2>{name}</h2>
            <p>{description}</p>
            <div>
                <a href="">deploy</a>
                <a href="">repositorio</a>
            </div>
            <ReactPlayer
                url={video}
                controls
            />
        </>
    );
};

export default Project;