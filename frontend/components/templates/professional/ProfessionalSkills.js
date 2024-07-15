const ProfessionalSkills = ({ skills }) => {
  return (
    <section className="my-12 bg-blue-900 text-white">
      <h2 className="text-4xl font-bold mb-6">Skills</h2>
      <ul className="list-disc list-inside">
        {skills.map((skill, index) => (
          <li key={index} className="text-lg">
            {skill.name}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default ProfessionalSkills
