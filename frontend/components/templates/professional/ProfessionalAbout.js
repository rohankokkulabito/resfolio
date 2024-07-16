const ProfessionalAbout = ({ basics }) => {
  return (
    <section className="my-12 bg-blue-900 text-white">
      <h2 className="text-4xl font-bold mb-6">About Me</h2>
      <p className="text-xl">{basics.summary}</p>
    </section>
  )
}

export default ProfessionalAbout
