import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../components/ui/table"
import { Button } from "../../components/ui/button"

const products = [
  { id: 1, name: "Modern Sofa", category: "Living Room", price: 999.99, stock: 10 },
  { id: 2, name: "Dining Table", category: "Dining Room", price: 599.99, stock: 15 },
  { id: 3, name: "Queen Size Bed", category: "Bedroom", price: 799.99, stock: 8 },
]

export default function Products() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Products</h2>
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Stock</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell className="font-medium">{product.name}</TableCell>
                <TableCell>{product.category}</TableCell>
                <TableCell>${product.price.toFixed(2)}</TableCell>
                <TableCell>{product.stock}</TableCell>
                <TableCell>
                  <Button variant="outline" size="sm" className="mr-2">
                    Edit
                  </Button>
                  <Button variant="destructive" size="sm">
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

