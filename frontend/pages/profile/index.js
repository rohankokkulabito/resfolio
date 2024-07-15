import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import resume from '../../resume.json'; // Import your resume JSON data

const Profile = ({ resumeData }) => {
  const router = useRouter();
  const { template } = router.query;
  const { basics, work, projects, skills, awards } = resumeData; // Destructure data from props

  if (!template) {
    return <div>Loading...</div>;
  }

  const templateName = template.charAt(0).toUpperCase() + template.slice(1);

  // Dynamically import template components based on the selected template
  const Navbar = dynamic(() => import(`../../components/templates/${template}/${templateName}Navbar`), { ssr: false });
  const Hero = dynamic(() => import(`../../components/templates/${template}/${templateName}Hero`), { ssr: false });
  const About = dynamic(() => import(`../../components/templates/${template}/${templateName}About`), { ssr: false });
  const Work = dynamic(() => import(`../../components/templates/${template}/${templateName}Work`), { ssr: false });
  const Projects = dynamic(() => import(`../../components/templates/${template}/${templateName}Projects`), { ssr: false });
  const Skills = dynamic(() => import(`../../components/templates/${template}/${templateName}Skills`), { ssr: false });
  const Awards = dynamic(() => import(`../../components/templates/${template}/${templateName}Awards`), { ssr: false });

  return (
    <div className={`relative ${template}-bg`}>
      <Navbar name={basics.name} />
      <Hero name={basics.name} label={basics.label} />
      <div className="container mx-auto p-4 pt-20">
        <section id="about" className={`${template}-about`}>
          <About basics={basics} />
        </section>
        <section id="work" className={`${template}-work`}>
          <Work work={work} />
        </section>
        <section id="projects" className={`${template}-projects`}>
          <Projects projects={projects} />
        </section>
        <section id="skills" className={`${template}-skills`}>
          <Skills skills={skills} />
        </section>
        <section id="awards" className={`${template}-awards`}>
          <Awards awards={awards} />
        </section>
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  // Fetch resume data from resume.json using a server-side function
  const resumeData = await import('../../resume-sai.json');
  
  // Return props to pass to the Profile component
  return {
    props: {
      resumeData: resumeData.default, // Ensure you use .default for default exports in ES module imports
    },
  };
}

export default Profile;