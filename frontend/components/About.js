// components/About.js
const About = ({ basics }) => {
  return (
    <section id="about" className="p-6 bg-background text-textPrimary min-h-screen flex flex-col justify-center">
      <h2 className="text-4xl font-bold mb-4 text-center">About</h2>
      <p className="text-lg text-center mb-2">{basics.name}</p>
      <p className="text-lg text-center mb-2">{basics.email}</p>
      <p className="text-lg text-center mb-2">{basics.phone}</p>
      <p className="text-lg text-center mb-2">{basics.address}</p>
      <p className="text-lg text-center mb-2">{basics.website}</p>
    </section>
  );
};

export default About;