const CreativeHero = ({ name, label }) => {
  return (
    <section className="creative-bg text-center py-20">
      <h1 className="text-6xl font-creative mb-4">{name}</h1>
      <p className="text-xl">{label}</p>
    </section>
  );
};

export default CreativeHero;