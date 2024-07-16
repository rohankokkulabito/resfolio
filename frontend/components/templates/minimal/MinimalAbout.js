const MinimalAbout = ({ basics }) => {
  const { summary } = basics;
  return (
    <div className="minimal-about p-4 rounded-lg shadow-md">
      <h2 className="text-2xl mb-2">About</h2>
      <p>{summary}</p>
    </div>
  );
};

export default MinimalAbout;