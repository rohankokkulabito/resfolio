import Link from 'next/link'
import ThemeToggler from '../../ThemeToggler'

const MinimalNavbar = ({ name }) => {
  return (
    <nav className="bg-black p-4 flex justify-between items-center">
      <div className="text-white font-bold text-xl">{name}</div>
      <div className="space-x-4">
        <Link legacyBehavior href="#about">
          <a className="text-white hover:text-gray-600">About</a>
        </Link>
        <Link legacyBehavior href="#work">
          <a className="text-white hover:text-gray-600">Work</a>
        </Link>
        <Link legacyBehavior href="#projects">
          <a className="text-white hover:text-gray-600">Projects</a>
        </Link>
        <Link legacyBehavior href="#skills">
          <a className="text-white hover:text-gray-600">Skills</a>
        </Link>
        <Link legacyBehavior href="#awards">
          <a className="text-white hover:text-gray-600">Awards</a>
        </Link>
        <ThemeToggler />
      </div>
    </nav>
  )
}

export default MinimalNavbar
