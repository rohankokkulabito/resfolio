// pages/index.js
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Welcome to Resfolio</h1>
      <Link  className="text-blue-500" legacyBehavior href="/profile">
        View Profile
      </Link>
    </div>
  )
}
