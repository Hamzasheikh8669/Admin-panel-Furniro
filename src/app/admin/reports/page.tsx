import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card"

export default function Reports() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Reports</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Sales Report</CardTitle>
          </CardHeader>
          <CardContent>
            <p>This is where you would display a sales chart or graph.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Inventory Report</CardTitle>
          </CardHeader>
          <CardContent>
            <p>This is where you would display inventory statistics.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>User Activity Report</CardTitle>
          </CardHeader>
          <CardContent>
            <p>This is where you would display user activity metrics.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Financial Report</CardTitle>
          </CardHeader>
          <CardContent>
            <p>This is where you would display financial data and projections.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

