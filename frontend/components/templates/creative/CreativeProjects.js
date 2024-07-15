const CreativeProjects = ({ projects }) => {
  return (
    <div className="creative-projects p-4 rounded-lg shadow-md">
      <h2 className="text-2xl mb-2">Projects</h2>
      {projects.map((project, index) => (
        <div key={index} className="mb-4">
          <h3 className="text-xl">{project.name}</h3>
          <p className="text-sm">{project.startDate} - {project.endDate}</p>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
};

export default CreativeProjects;