import { Suspense } from "react";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, Package, Users } from "lucide-react";

const AdminPage = () => {
  const stats = {
    products: 42,
    orders: 128,
    users: 19,
  };

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Admin Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex items-center gap-2">
            <Home className="h-5 w-5 text-indigo-600" />
            <CardTitle>Products</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-start gap-2">
            <div className="text-2xl font-semibold">{stats.products}</div>
            <Link href="/admin/products">
              <Button variant="link">Manage Products</Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex items-center gap-2">
            <Package className="h-5 w-5 text-green-600" />
            <CardTitle>Orders</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-start gap-2">
            <div className="text-2xl font-semibold">{stats.orders}</div>
            <Link href="/admin/orders">
              <Button variant="link">View Orders</Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex items-center gap-2">
            <Users className="h-5 w-5 text-blue-600" />
            <CardTitle>Users</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-start gap-2">
            <div className="text-2xl font-semibold">{stats.users}</div>
            <Link href="/admin/users">
              <Button variant="link">Manage Users</Button>
            </Link>
          </CardContent>
        </Card>
      </div>

      <section className="pt-8">
        <h2 className="text-2xl font-semibold mb-4">Quick Actions</h2>
        <div className="flex flex-wrap gap-4">
          <Link href="/admin/products/new">
            <Button>Create New Product</Button>
          </Link>
          <Link href="/admin/settings">
            <Button variant="outline">Site Settings</Button>
          </Link>
        </div>
      </section>
    </div>
  );
};
export default AdminPage;
