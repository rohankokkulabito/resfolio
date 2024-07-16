import EditableSkills from './EditableSkills'; // Adjust the path as per your file structure

const MinimalSkills = ({ skills }) => {
  return (
    <section className="my-12 text-white">
      <h2 className="text-4xl font-bold mb-6">Skills</h2>
      <EditableSkills initialSkills={skills} />
    </section>
  );
};

export default MinimalSkills;