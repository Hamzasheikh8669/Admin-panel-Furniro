import Link from "next/link"
import { Home, Users, Package, FileText, User } from "lucide-react"

export function Sidebar() {
  return (
    <div className="bg-gradient-to-b from-purple-700 to-blue-500 w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
      <nav className="space-y-2">
        <Link
          href="/admin"
          className="flex items-center space-x-2 px-4 py-2 text-white hover:bg-white/10 rounded-md transition duration-150 ease-in-out"
        >
          <Home className="h-5 w-5" />
          <span className="font-medium">Dashboard</span>
        </Link>
        <Link
          href="/admin/users"
          className="flex items-center space-x-2 px-4 py-2 text-white hover:bg-white/10 rounded-md transition duration-150 ease-in-out"
        >
          <Users className="h-5 w-5" />
          <span className="font-medium">Users</span>
        </Link>
        <Link
          href="/admin/products"
          className="flex items-center space-x-2 px-4 py-2 text-white hover:bg-white/10 rounded-md transition duration-150 ease-in-out"
        >
          <Package className="h-5 w-5" />
          <span className="font-medium">Products</span>
        </Link>
        <Link
          href="/admin/reports"
          className="flex items-center space-x-2 px-4 py-2 text-white hover:bg-white/10 rounded-md transition duration-150 ease-in-out"
        >
          <FileText className="h-5 w-5" />
          <span className="font-medium">Reports</span>
        </Link>
        <Link
          href="/admin/profile"
          className="flex items-center space-x-2 px-4 py-2 text-white hover:bg-white/10 rounded-md transition duration-150 ease-in-out"
        >
          <User className="h-5 w-5" />
          <span className="font-medium">Profile</span>
        </Link>
      </nav>
    </div>
  )
}

