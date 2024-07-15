const MinimalAwards = ({ awards }) => {
  return (
    <section className="my-12  text-white">
      <h2 className="text-4xl font-bold mb-6">Awards</h2>
      {awards.map((award, index) => (
        <div key={index} className="mb-8">
          <h3 className="text-2xl font-semibold">{award.title}</h3>
          <p className="text-lg">{award.date}</p>
          <p>{award.awarder}</p>
        </div>
      ))}
    </section>
  )
}

export default MinimalAwards
