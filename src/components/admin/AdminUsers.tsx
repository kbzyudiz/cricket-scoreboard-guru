
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

interface User {
  id: string;
  name: string;
  email: string;
  role: "user" | "admin";
  status: "active" | "inactive";
  joined: string;
  lastActive: string;
  photoUrl?: string;
}

// Mock data for users
const users: User[] = [
  {
    id: "user1",
    name: "Ravi Singh",
    email: "ravi@example.com",
    role: "admin",
    status: "active",
    joined: "2025-01-15",
    lastActive: "2025-04-22",
  },
  {
    id: "user2",
    name: "Ankit Sharma",
    email: "ankit@example.com",
    role: "user",
    status: "active",
    joined: "2025-01-20",
    lastActive: "2025-04-21",
  },
  {
    id: "user3",
    name: "Priya Patel",
    email: "priya@example.com",
    role: "user",
    status: "active",
    joined: "2025-02-05",
    lastActive: "2025-04-20",
  },
  {
    id: "user4",
    name: "John Smith",
    email: "john@example.com",
    role: "user",
    status: "active",
    joined: "2025-02-10",
    lastActive: "2025-04-22",
  },
  {
    id: "user5",
    name: "Rahul Kumar",
    email: "rahul@example.com",
    role: "user",
    status: "inactive",
    joined: "2025-03-01",
    lastActive: "2025-04-10",
  },
];

export function AdminUsers() {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">Manage Users</h2>
        <Button>Add User</Button>
      </div>

      <div className="rounded-md border overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-50">
              <TableHead>User</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Joined</TableHead>
              <TableHead>Last Active</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>
                  <div className="flex items-center space-x-3">
                    <Avatar className="h-8 w-8">
                      <img
                        src={user.photoUrl || "/assets/logo.svg"}
                        alt={user.name}
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = "/assets/logo.svg";
                        }}
                      />
                    </Avatar>
                    <div>
                      <div className="font-medium">{user.name}</div>
                      <div className="text-sm text-gray-500">{user.email}</div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant={user.role === "admin" ? "default" : "outline"}>
                    {user.role === "admin" ? "Admin" : "User"}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge variant={user.status === "active" ? "success" : "secondary"}>
                    {user.status === "active" ? "Active" : "Inactive"}
                  </Badge>
                </TableCell>
                <TableCell>
                  {new Date(user.joined).toLocaleDateString()}
                </TableCell>
                <TableCell>
                  {new Date(user.lastActive).toLocaleDateString()}
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex space-x-2 justify-end">
                    <Button variant="outline" size="sm">Edit</Button>
                    {user.status === "active" ? (
                      <Button variant="outline" size="sm">Deactivate</Button>
                    ) : (
                      <Button variant="outline" size="sm">Activate</Button>
                    )}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
