import { Container, Profile } from "./styles";

import { useAuth } from "../../hooks/authHook";

import { api } from "../../services/api";

import avatarPlaceholder from "../../assets/avatar_placeholder.svg";

import { InputText } from "../InputText";

export function Header() {
  const { signOut, user } = useAuth();

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;

  function handleSignOut() {
    signOut();
  }

  return (
    <Container>
      <h1>RocketMovies</h1>

      <InputText placeholder="Pesquisar por título" />

      <Profile to={"/profile"}>
        <div>
          <strong>{user.name}</strong>
          <button onClick={handleSignOut}>sair</button>
        </div>
        <img src={avatarUrl} alt="Foto do usuário" />
      </Profile>
    </Container>
  );
}
