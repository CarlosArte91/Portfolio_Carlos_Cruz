import ContactForm from './components/contact/contact_form/contactForm';
import Navbar from './components/navegation/navbar/navbar';
import Profile from './components/profile/profile';
import Projects from './components/projects/all_projects/projects';
import SkillComponent from './components/skills/skill_component/skillComponent';

function App() {
  return (
    <>
      <Navbar/>
      <Profile/>
      <Projects/>
      <SkillComponent/>
      <ContactForm/>
    </>
  );
}

export default App;
