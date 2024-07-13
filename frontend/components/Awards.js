// components/Awards.js
const Awards = ({ awards }) => {
    return (
      <section id="awards" className="p-6 bg-background text-textPrimary min-h-screen flex flex-col justify-center">
        <h2 className="text-4xl font-bold mb-4 text-center">Awards</h2>
        {awards.map((award, index) => (
          <div key={index} className="mb-8 shadow-lg p-4 rounded-lg  transition duration-300">
            <h3 className="text-2xl font-semibold">{award.title}</h3>
            <p className="text-lg">{award.date}</p>
            <p className="text-lg">{award.awarder}</p>
            <p className="text-lg">{award.summary}</p>
          </div>
        ))}
      </section>
    );
  };
  
  export default Awards;