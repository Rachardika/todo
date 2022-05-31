import { useEffect, useState } from "react";
import api from "../helpers/api";

function Users() {
  const [users, setUsers] = useState([]);

  async function LoadUsers() {
    const response = await api.get("/public/v1/users");
    const usersResponse = response.data.data;
    setUsers(usersResponse);
  }

  useEffect(() => {
    LoadUsers();
  }, []);

  return (
    <div
      style={{
        padding: "20px",
      }}
    >
      <h1>Users</h1>
      <div>
        {users.map((user) => {
          return (
            <div
              key={user.id}
              style={{
                border: "1px solid #ccc",
                padding: "10px",
                marginBottom: "10px",
              }}
            >
              <p>Email: {user.email}</p>
              <p>Gender: {user.gender}</p>
              <p>Name: {user.name}</p>
              <p>Status: {user.status}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Users;
