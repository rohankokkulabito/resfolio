// components/navbars/ProfessionalNavbar.js
import Link from 'next/link';

const ProfessionalNavbar = ({ name }) => {
  return (
    <nav className="bg-gray-800 p-4 shadow-lg fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-3xl font-bold">{name}</h1>
        <ul className="flex space-x-6 text-white">
          <li>
            <Link href="#about" legacyBehavior>
              <a className="hover:text-gray-300">About</a>
            </Link>
          </li>
          <li>
            <Link href="#work" legacyBehavior>
              <a className="hover:text-gray-300">Work</a>
            </Link>
          </li>
          <li>
            <Link href="#projects" legacyBehavior>
              <a className="hover:text-gray-300">Projects</a>
            </Link>
          </li>
          <li>
            <Link href="#skills" legacyBehavior>
              <a className="hover:text-gray-300">Skills</a>
            </Link>
          </li>
          <li>
            <Link href="#awards" legacyBehavior>
              <a className="hover:text-gray-300">Awards</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default ProfessionalNavbar;