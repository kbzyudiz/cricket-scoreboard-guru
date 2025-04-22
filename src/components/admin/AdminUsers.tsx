
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Pencil, Trash, ChevronLeft, ChevronRight } from "lucide-react";

const mockUsers = [
  {
    id: 1,
    name: "John Smith",
    email: "john@example.com",
    role: "admin",
    status: "active",
    predictions: 124,
    dateJoined: "2023-04-12",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    email: "sarah@example.com",
    role: "user",
    status: "active",
    predictions: 83,
    dateJoined: "2023-05-18",
  },
  {
    id: 3,
    name: "Michael Brown",
    email: "michael@example.com",
    role: "user",
    status: "inactive",
    predictions: 37,
    dateJoined: "2023-06-02",
  },
  {
    id: 4,
    name: "Emily Davis",
    email: "emily@example.com",
    role: "user",
    status: "active",
    predictions: 65,
    dateJoined: "2023-07-14",
  },
  {
    id: 5,
    name: "Daniel Wilson",
    email: "daniel@example.com",
    role: "user",
    status: "active",
    predictions: 92,
    dateJoined: "2023-08-23",
  },
];

export function AdminUsers() {
  const [users] = useState(mockUsers);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;
  const totalPages = Math.ceil(users.length / usersPerPage);
  
  const handleEditUser = (userId: number) => {
    console.log(`Edit user ${userId}`);
  };
  
  const handleDeleteUser = (userId: number) => {
    console.log(`Delete user ${userId}`);
  };
  
  const paginatedUsers = users.slice(
    (currentPage - 1) * usersPerPage,
    currentPage * usersPerPage
  );
  
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Manage Users</CardTitle>
        <Button size="sm">Add New User</Button>
      </CardHeader>
      <CardContent>
        <div className="rounded-md border">
          <table className="w-full caption-bottom text-sm">
            <thead>
              <tr className="border-b bg-muted/50">
                <th className="h-10 px-4 text-left font-medium">Name</th>
                <th className="h-10 px-4 text-left font-medium">Email</th>
                <th className="h-10 px-4 text-left font-medium">Role</th>
                <th className="h-10 px-4 text-left font-medium">Status</th>
                <th className="h-10 px-4 text-left font-medium">Predictions</th>
                <th className="h-10 px-4 text-left font-medium">Joined</th>
                <th className="h-10 px-4 text-left font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {paginatedUsers.map((user) => (
                <tr key={user.id} className="border-b">
                  <td className="p-4">{user.name}</td>
                  <td className="p-4">{user.email}</td>
                  <td className="p-4">
                    <Badge variant={user.role === "admin" ? "default" : "secondary"}>
                      {user.role}
                    </Badge>
                  </td>
                  <td className="p-4">
                    <Badge variant={user.status === "active" ? "secondary" : "outline"}>
                      {user.status}
                    </Badge>
                  </td>
                  <td className="p-4">{user.predictions}</td>
                  <td className="p-4">{user.dateJoined}</td>
                  <td className="p-4">
                    <div className="flex space-x-2">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => handleEditUser(user.id)}
                        className="h-8 w-8"
                      >
                        <Pencil className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="destructive"
                        size="icon"
                        onClick={() => handleDeleteUser(user.id)}
                        className="h-8 w-8"
                      >
                        <Trash className="h-4 w-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {totalPages > 1 && (
          <div className="flex items-center justify-end space-x-2 py-4">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setCurrentPage(Math.max(currentPage - 1, 1))}
              disabled={currentPage === 1}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <span className="text-sm">
              Page {currentPage} of {totalPages}
            </span>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setCurrentPage(Math.min(currentPage + 1, totalPages))}
              disabled={currentPage === totalPages}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
