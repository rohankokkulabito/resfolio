import { useState } from 'react';

const EditableSkills = ({ initialSkills }) => {
  const [skills, setSkills] = useState(initialSkills);

  const handleAddSkill = () => {
    const newSkill = { name: 'New Skill' }; // Example initial value
    setSkills([...skills, newSkill]);
  };

  const handleRemoveSkill = (index) => {
    const updatedSkills = skills.filter((_, i) => i !== index);
    setSkills(updatedSkills);
  };

  const handleEditSkill = (index, newName) => {
    const updatedSkills = [...skills];
    updatedSkills[index] = { ...updatedSkills[index], name: newName };
    setSkills(updatedSkills);
  };

  return (
    <section className="my-12 text-white">
      <h2 className="text-4xl font-bold mb-6">Skills</h2>
      <ul className="list-disc list-inside">
        {skills.map((skill, index) => (
          <li key={index} className="text-lg">
            <SkillItem
              skill={skill}
              onRemove={() => handleRemoveSkill(index)}
              onEdit={(newName) => handleEditSkill(index, newName)}
            />
          </li>
        ))}
        <li className="text-lg">
          <button onClick={handleAddSkill} className="text-blue-500 underline focus:outline-none">
            Add Skill
          </button>
        </li>
      </ul>
    </section>
  );
};

const SkillItem = ({ skill, onRemove, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(skill.name);

  const handleSave = () => {
    onEdit(newName);
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <div className="flex items-center">
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            className="border border-gray-300 p-1 mr-2"
          />
          <button onClick={handleSave} className="text-green-500 focus:outline-none">
            Save
          </button>
        </div>
      ) : (
        <div className="flex items-center">
          <span>{skill.name}</span>
          <button onClick={() => setIsEditing(true)} className="ml-2 text-blue-500 underline focus:outline-none">
            Edit
          </button>
          <button onClick={onRemove} className="ml-2 text-red-500 underline focus:outline-none">
            Remove
          </button>
        </div>
      )}
    </div>
  );
};

export default EditableSkills;