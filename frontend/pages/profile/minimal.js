// pages/profile/minimal.js
import MinimalNavbar from '../../components/navbars/MinimalNavbar';
import MinimalHero from '../../components/heros/MinimalHero';
import About from '../../components/About';
import Work from '../../components/Work';
import Projects from '../../components/Projects';
import Skills from '../../components/Skills';
import Awards from '../../components/Awards';
import ThemeToggler from '../../components/ThemeToggler';
import resume from '../../resume.json';

const MinimalProfile = () => {
  const { basics, work, projects, skills, awards } = resume;
  const { name, label } = basics;

  return (
    <div className="relative bg-background dark:bg-darkBackground text-textPrimary dark:text-darkTextPrimary">
      <MinimalNavbar name={name} />
      <ThemeToggler />
      <MinimalHero name={name} label={label} />
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

export default MinimalProfile;