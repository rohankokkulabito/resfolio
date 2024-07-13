import ProfessionalNavbar from '../../components/navbars/ProfessionalNavbar';
import ProfessionalHero from '../../components/heros/ProfessionalHero';
import About from '../../components/About';
import Work from '../../components/Work';
import Projects from '../../components/Projects';
import Skills from '../../components/Skills';
import Awards from '../../components/Awards';
import ThemeToggler from '../../components/ThemeToggler';
import resume from '../../resume.json';

const ProfessionalProfile = () => {
  const { basics, work, projects, skills, awards } = resume;
  const { name, label } = basics;

  return (
    <div className="relative bg-white dark:bg-darkBackground text-textPrimary dark:text-darkTextPrimary">
      <ProfessionalNavbar name={name} />
      <ThemeToggler />
      <ProfessionalHero name={name} label={label} />
      <div className="container mx-auto p-4 pt-20">
        <section id="about">
          <About basics={basics} />
        </section>
        <section id="work">
          <Work work={work} />
        </section>
        <section id="projects">
          <Projects projects={projects} />
        </section>
        <section id="skills">
          <Skills skills={skills} />
        </section>
        <section id="awards">
          <Awards awards={awards} />
        </section>
      </div>
    </div>
  );
};

export default ProfessionalProfile;