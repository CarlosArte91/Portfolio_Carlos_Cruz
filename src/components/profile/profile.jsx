import profileImage from '../../assets/images/profile/profile.JPG';

function Profile() {
    return (
        <div>
            <h1>Carlos Cruz</h1>
            <h2>Full Stack Web Developer</h2>
            <img src={profileImage} alt="profile" />
            <p>
                Soy desarrollador web Full Stack, con conocimiento en diferentes tecnologías back end como Node,
                Sequelize, bases de datos y tecnologías front end como, React y Redux. Cuento con experiencia en el 
                desarrollo de una aplicación web creada de forma grupal para el bootcamp de Soy Henry, y el desarrollo 
            </p>
        </div>
    );
};

export default Profile;