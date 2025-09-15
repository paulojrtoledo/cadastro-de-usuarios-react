import { useState, useEffect } from "react";
import { getUsers, createUser, deleteUser } from "../services/userService";

export function useUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function fetchUsers() {
    try {
      setLoading(true);
      const data = await getUsers();
      setUsers(data);
    } catch (err) {
      setError("Erro ao carregar usuários");
    } finally {
      setLoading(false);
    }
  }

  async function addUser(userData) {
    const newUser = await createUser(userData);
    setUsers(prev => [...prev, newUser]);
  }

  async function removeUser(id) {
    await deleteUser(id);
    setUsers(prev => prev.filter(user => user.id !== id));
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return { users, loading, error, addUser, removeUser };
}
