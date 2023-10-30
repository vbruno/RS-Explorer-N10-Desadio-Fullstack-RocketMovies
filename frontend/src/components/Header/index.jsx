import { Container, Profile } from "./styles";

import { useAuth } from "../../hooks/authHook";

import { InputText } from "../InputText";

export function Header() {
  const { signOut } = useAuth();

  function handleSignOut() {
    signOut();
  }

  return (
    <Container>
      <h1>RocketMovies</h1>

      <InputText placeholder="Pesquisar por título" />

      <Profile to={"/profile"}>
        <div>
          <strong>Bruno S. Velho</strong>
          <button onClick={handleSignOut}>sair</button>
        </div>
        <img src="http://github.com/vbruno.png" alt="Foto do usuário" />
      </Profile>
    </Container>
  );
}
