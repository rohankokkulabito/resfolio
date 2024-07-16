const CreativeSkills = ({ skills }) => {
  return (
    <div className="creative-skills p-4 rounded-lg shadow-md">
      <h2 className="text-2xl mb-2">Skills</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index} className="mb-1">{skill.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CreativeSkills;