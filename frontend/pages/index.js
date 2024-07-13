// pages/index.js
import Link from 'next/link';

const Home = () => {
  return (
    <div className="min-h-screen bg-background dark:bg-darkBackground text-textPrimary dark:text-darkTextPrimary">
      <header className="container mx-auto py-8">
        <h1 className="text-5xl font-bold text-center mb-12">Pick Your Template</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Link href="/profile/creative" legacyBehavior>
            <a className="p-8 bg-pink-700 dark:bg-darkBackground shadow-lg rounded-lg hover:shadow-2xl transition duration-300">
              <h2 className="text-3xl font-bold mb-4">Creative</h2>
              <p>Explore the creative template with vibrant colors and engaging design.</p>
            </a>
          </Link>
          <Link href="/profile/professional" legacyBehavior>
            <a className="p-8 bg-blue-400 dark:bg-darkBackground shadow-lg rounded-lg hover:shadow-2xl transition duration-300">
              <h2 className="text-3xl font-bold mb-4">Professional</h2>
              <p>Explore the professional template with a clean and formal look.</p>
            </a>
          </Link>
          <Link href="/profile/minimal" legacyBehavior>
            <a className="p-8 bg-black dark:bg-darkBackground shadow-lg rounded-lg hover:shadow-2xl transition duration-300">
              <h2 className="text-3xl font-bold mb-4">Minimal</h2>
              <p>Explore the minimal template with a sleek and modern design.</p>
            </a>
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Home;