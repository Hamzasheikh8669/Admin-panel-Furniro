import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card"
import { Input } from "../../components/ui/input"
import { Button } from "../../components/ui/button"

export default function Profile() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Profile</h2>
      <Card>
        <CardHeader>
          <CardTitle>Edit Profile</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <Input type="text" id="name" name="name" defaultValue="Hamza Sheikh" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <Input type="email" id="email" name="email" defaultValue="Sheikhmhamza37@gmail.com" />
            </div>
            <div>
              <label htmlFor="role" className="block text-sm font-medium text-gray-700">
                Role
              </label>
              <Input type="text" id="role" name="role" defaultValue="Admin" disabled />
            </div>
            <div>
              <Button type="submit">Save Changes</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

