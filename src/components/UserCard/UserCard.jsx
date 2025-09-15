import Trash from "../../assets/trash.svg";

export default function UserCard({ user, onDelete }) {
  return (
    <div className="card">
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
      <button onClick={() => onDelete(user.id)}>
        <img src={Trash} alt="Deletar" />
      </button>
    </div>
  );
}
