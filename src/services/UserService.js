import api from "./api";

export async function getUsers() {
  const response = await api.get("/usuarios");
  return response.data;
}

export async function createUser(userData) {
  const response = await api.post("/usuarios", userData);
  return response.data;
}

export async function deleteUser(id) {
  await api.delete(`/usuarios/${id}`);
  return id;
}
