import Trash from "../../assets/trash.svg";

export default function UserList({ users, onDeleteUser }) {
  return (
    <div>
      {users.length === 0 ? (
        <p>Nenhum usuário cadastrado.</p>
      ) : (
        users.map(user => (
          <div key={user.id} className="card">
            <div>
              <p>
                Nome: <span>{user.name}</span>
              </p>
              <p>
                Idade: <span>{user.age}</span>
              </p>
              <p>
                E-mail: <span>{user.email}</span>
              </p>
            </div>
            <button onClick={() => onDeleteUser(user.id)}>
              <img src={Trash} alt="Deletar" />
            </button>
          </div>
        ))
      )}
    </div>
  );
}
