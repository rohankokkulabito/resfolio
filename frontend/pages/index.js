import Link from 'next/link';

const Home = () => {
  const templates = [
    { name: 'Creative', path: 'creative' },
    { name: 'Professional', path: 'professional' },
    { name: 'Minimal', path: 'minimal' },
  ];

  return (
    <div className="min-h-screen bg-background dark:bg-darkBackground text-textPrimary dark:text-darkTextPrimary">
      <header className="container mx-auto py-8">
        <h1 className="text-5xl font-bold text-center mb-12">Pick Your Template</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {templates.map((template) => (
            <Link key={template.path} href={`/profile?template=${template.path}`} legacyBehavior>
              <a className="p-8 bg-white dark:bg-darkBackground shadow-lg rounded-lg hover:shadow-2xl transition duration-300">
                <h2 className="text-3xl font-bold mb-4">{template.name}</h2>
                <p>Explore the {template.name.toLowerCase()} template with vibrant colors and engaging design.</p>
              </a>
            </Link>
          ))}
        </div>
      </header>
    </div>
  );
};

export default Home;