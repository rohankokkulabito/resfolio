// pages/profile/index.js
import Navbar from '../../components/Navbar';
import Hero from '../../components/Hero';
import About from '../../components/About';
import Work from '../../components/Work';
import Projects from '../../components/Projects';
import Skills from '../../components/Skills';
import Awards from '../../components/Awards';
import resume from '../../resume-sai.json';

const Profile = () => {
  const { basics, work, projects, skills, awards } = resume;
  const { name, label } = basics;

  return (
    <div className="relative">
      <Navbar name={name} />
      <Hero name={name} label={label} />
      <div className="container mx-auto p-4 pt-20">
        <About basics={basics} />
        <Work work={work} />
        <Projects projects={projects} />
        <Skills skills={skills} />
        <Awards awards={awards} />
      </div>
    </div>
  );
};

export default Profile;