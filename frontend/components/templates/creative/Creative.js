// components/templates/Creative.js
import Navbar from '../../Navbar'
import Hero from '../../Hero'
import About from '../../About'
import Work from '../../Work'
import Projects from '../../Projects'
import Skills from '../../Skills'
import Awards from '../../Awards'
import ThemeToggler from '../../ThemeToggler'
import resume from '../../resume-sai.json'

const Creative = () => {
  const { basics, work, projects, skills, awards } = resume
  const { name, label } = basics

  return (
    <div className="relative bg-background dark:bg-darkBackground text-textPrimary dark:text-darkTextPrimary">
      <ThemeToggler />
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
  )
}

export default Creative