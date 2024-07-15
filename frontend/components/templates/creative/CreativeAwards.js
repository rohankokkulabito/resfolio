const CreativeAwards = ({ awards }) => {
  return (
    <div className="creative-awards p-4 rounded-lg shadow-md">
      <h2 className="text-2xl mb-2">Awards</h2>
      {awards.map((award, index) => (
        <div key={index} className="mb-4">
          <h3 className="text-xl">{award.title}</h3>
          <p className="text-sm">{award.date}</p>
          <p>{award.awarder}</p>
        </div>
      ))}
    </div>
  );
};

export default CreativeAwards;