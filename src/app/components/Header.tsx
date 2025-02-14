import { Bell, Settings, Search } from "lucide-react"

export function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-2xl font-semibold text-gray-800">Admin Panel</h1>
            <div className="ml-6 relative">
              <input
                type="text"
                placeholder="Search..."
                className="bg-gray-100 text-gray-800 pl-10 pr-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-1 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out">
              <Bell className="h-6 w-6" />
            </button>
            <button className="p-1 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out">
              <Settings className="h-6 w-6" />
            </button>
            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-semibold">
              JD
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

