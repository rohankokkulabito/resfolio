// components/Navbar.js
import Link from 'next/link';

const Navbar = ({ name }) => {
  return (
    <nav className="bg-primary p-4 shadow-lg fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-3xl font-bold">{name}</h1>
        <ul className="flex space-x-6 text-white">
          <li>
            <Link href="#about" legacyBehavior>
              <a className="hover:text-secondary">About</a>
            </Link>
          </li>
          <li>
            <Link href="#work" legacyBehavior>
              <a className="hover:text-secondary">Work</a>
            </Link>
          </li>
          <li>
            <Link href="#projects" legacyBehavior>
              <a className="hover:text-secondary">Projects</a>
            </Link>
          </li>
          <li>
            <Link href="#skills" legacyBehavior>
              <a className="hover:text-secondary">Skills</a>
            </Link>
          </li>
          <li>
            <Link href="#awards" legacyBehavior>
              <a className="hover:text-secondary">Awards</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;