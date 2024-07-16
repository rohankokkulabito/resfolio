const CreativeWork = ({ work }) => {
  return (
    <div className="creative-work p-4 rounded-lg shadow-md">
      <h2 className="text-2xl mb-2">Work Experience</h2>
      {work.map((job, index) => (
        <div key={index} className="mb-4">
          <h3 className="text-xl">{job.position} at {job.company}</h3>
          <p className="text-sm">{job.startDate} - {job.endDate}</p>
          <p>{job.summary}</p>
        </div>
      ))}
    </div>
  );
};

export default CreativeWork;