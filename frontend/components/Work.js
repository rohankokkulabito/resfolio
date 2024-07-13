// components/Work.js
const Work = ({ work }) => {
    return (
      <section id="work" className="p-6 bg-white text-textPrimary min-h-screen flex flex-col justify-center">
        <h2 className="text-4xl font-bold mb-4 text-center">Work Experience</h2>
        {work.map((job, index) => (
          <div key={index} className="mb-8 shadow-lg p-4 rounded-lg hover:bg-background transition duration-300">
            <h3 className="text-2xl font-semibold">{job.position} at {job.company}</h3>
            <p className="text-lg">{job.startDate} - {job.endDate}</p>
            <p className="text-lg">{job.location}</p>
            <ul className="list-disc ml-6">
              {job.highlights.map((highlight, i) => (
                <li key={i} className="text-lg">{highlight}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    );
  };
  
  export default Work;