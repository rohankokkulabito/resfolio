// components/navbars/MinimalNavbar.js
import Link from 'next/link';

const MinimalNavbar = ({ name }) => {
  return (
    <nav className="bg-white dark:bg-black p-4 shadow-lg fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-black dark:text-white text-3xl font-bold">{name}</h1>
        <ul className="flex space-x-6 text-black dark:text-white">
          <li>
            <Link href="#about" legacyBehavior>
              <a className="hover:text-gray-500">About</a>
            </Link>
          </li>
          <li>
            <Link href="#work" legacyBehavior>
              <a className="hover:text-gray-500">Work</a>
            </Link>
          </li>
          <li>
            <Link href="#projects" legacyBehavior>
              <a className="hover:text-gray-500">Projects</a>
            </Link>
          </li>
          <li>
            <Link href="#skills" legacyBehavior>
              <a className="hover:text-gray-500">Skills</a>
            </Link>
          </li>
          <li>
            <Link href="#awards" legacyBehavior>
              <a className="hover:text-gray-500">Awards</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default MinimalNavbar;