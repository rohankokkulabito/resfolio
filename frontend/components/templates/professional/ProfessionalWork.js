const ProfessionalWork = ({ work }) => {
  return (
    <section className=" my-12 bg-blue-900 text-white">
      <h2 className="text-4xl font-bold mb-6">Work Experience</h2>
      {work.map((job, index) => (
        <div key={index} className="mb-8">
          <h3 className="text-2xl font-semibold">
            {job.position} at {job.name}
          </h3>
          <p className="text-lg">
            {job.startDate} - {job.endDate}
          </p>
          <p>{job.summary}</p>
        </div>
      ))}
    </section>
  )
}

export default ProfessionalWork
