// components/heros/ProfessionalHero.js
const ProfessionalHero = ({ name, label }) => {
    return (
      <section className="h-screen bg-gray-800 flex flex-col justify-center items-center text-white text-center">
        <h1 className="text-6xl font-bold mb-4">{name}</h1>
        <p className="text-2xl mb-8">{label}</p>
        <a href="#about" className="bg-primary px-6 py-3 rounded-full text-xl transition duration-300 hover:bg-secondary">
          Learn More
        </a>
      </section>
    );
  };
  
  export default ProfessionalHero;