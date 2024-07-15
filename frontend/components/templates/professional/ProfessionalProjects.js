const ProfessionalProjects = ({ projects }) => {
  return (
    <section className="my-12 bg-blue-900 text-white">
      <h2 className="text-4xl font-bold mb-6">Projects</h2>
      {projects.map((project, index) => (
        <div key={index} className="mb-8">
          <h3 className="text-2xl font-semibold">{project.name}</h3>
          <p className="text-lg">{project.description}</p>
        </div>
      ))}
    </section>
  )
}

export default ProfessionalProjects
