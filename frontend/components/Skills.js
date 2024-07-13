// components/Skills.js
const Skills = ({ skills }) => {
    return (
      <section id="skills" className="p-6 bg-white text-textPrimary min-h-screen flex flex-col justify-center">
        <h2 className="text-4xl font-bold mb-4 text-center">Skills</h2>
        {skills.map((skill, index) => (
          <div key={index} className="mb-8 shadow-lg p-4 rounded-lg hover:bg-background transition duration-300">
            <h3 className="text-2xl font-semibold">{skill.name}</h3>
            <p className="text-lg">Keywords: {skill.keywords.join(', ')}</p>
          </div>
        ))}
      </section>
    );
  };
  
  export default Skills;