import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Users } from "lucide-react"

export default function AdminDashboard() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-gradient-to-br from-purple-500 to-indigo-600 text-white">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-lg font-medium">Total Users</CardTitle>
            <Users className="h-6 w-6 opacity-75" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">1,234</div>
            <p className="text-sm opacity-75">+10% from last month</p>
          </CardContent>
        </Card>
        {/* Other cards remain the same */}
      </div>
    </div>
  )
}

