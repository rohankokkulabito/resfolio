import Link from 'next/link';
import ThemeToggler from '../../ThemeToggler';

const CreativeNavbar = ({ name }) => {
  return (
    <nav className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white shadow-md">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <h1 className="text-3xl font-creative">{name}</h1>
        <ul className="flex space-x-4">
          <li>
            <Link legacyBehavior href="#about">
              <a className="hover:text-yellow-300 transition duration-300">About</a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="#work">
              <a className="hover:text-yellow-300 transition duration-300">Work</a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="#projects">
              <a className="hover:text-yellow-300 transition duration-300">Projects</a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="#skills">
              <a className="hover:text-yellow-300 transition duration-300">Skills</a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="#awards">
              <a className="hover:text-yellow-300 transition duration-300">Awards</a>
            </Link>
          </li>
        </ul>
        <ThemeToggler />
      </div>
    </nav>
  );
};

export default CreativeNavbar;