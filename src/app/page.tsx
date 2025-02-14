import Link from "next/link"
import { Button } from "./components/ui/button"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Welcome to Our Furniture Store</h1>
        <Link href="/admin">
          <Button>Go to Admin Panel</Button>
        </Link>
      </div>
    </div>
  )
}

