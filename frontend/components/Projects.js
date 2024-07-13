// components/Projects.js
const Projects = ({ projects }) => {
  return (
    <section
      id="projects"
      className="p-6 bg-background text-textPrimary min-h-screen flex flex-col justify-center"
    >
      <h2 className="text-4xl font-bold mb-4 text-center">Projects</h2>
      {projects.map((project, index) => (
        <div
          key={index}
          className="mb-8 shadow-lg p-4 rounded-lg  transition duration-300"
        >
          <h3 className="text-2xl font-semibold">{project.name}</h3>
          <p className="text-lg">{project.description}</p>
          <p className="text-lg">Keywords: {project.keywords.join(', ')}</p>
          href={project.url} Project Link
        </div>
      ))}
    </section>
  )
}

export default Projects
