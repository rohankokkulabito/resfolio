// components/heros/CreativeHero.js
const CreativeHero = ({ name, label }) => {
    return (
      <section className="h-screen bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 flex flex-col justify-center items-center text-white text-center">
        <h1 className="text-6xl font-bold mb-4">{name}</h1>
        <p className="text-2xl mb-8">{label}</p>
        <a href="#about" className="bg-secondary px-6 py-3 rounded-full text-xl transition duration-300 hover:bg-accent">
          Learn More
        </a>
      </section>
    );
  };
  
  export default CreativeHero;