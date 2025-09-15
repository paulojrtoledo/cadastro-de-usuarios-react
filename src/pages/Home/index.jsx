import { useUsers } from "../../hooks/useUsers";
import UserForm from "../../components/UserForm/UserForm";
import UserList from "../../components/UserList/UserList";
import "./style.css"; // caso queira ter estilos específicos da página

export default function HomePage() {
  // Substituí createUser → addUser e deleteUser → removeUser
  const { users, addUser, removeUser } = useUsers();

  return (
    <div className="container">

      {/* Formulário */}
      <UserForm onAddUser={addUser} />

      {/* Lista */}
      <UserList users={users} onDeleteUser={removeUser} />
    </div>
  );
}