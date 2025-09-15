import { useState } from "react";

export default function UserForm({ onAddUser }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !age || !email) {
      alert("Preencha todos os campos!");
      return;
    }

    onAddUser({ name, age, email });

    // limpa os campos depois de cadastrar
    setName("");
    setAge("");
    setEmail("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Cadastro de Usuários</h1>
      <input
        placeholder="Nome"
        type="text"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <input
        placeholder="Idade"
        type="number"
        value={age}
        onChange={e => setAge(e.target.value)}
      />
      <input
        placeholder="E-mail"
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <button type="submit">Cadastrar</button>
    </form>
  );
}
