import { Link } from "react-router-dom";
import { Container, Profile } from "./styles";

import { InputText } from "../InputText";

export function Header() {
  return (
    <Container>
      <h1>RocketMovies</h1>

      <InputText placeholder="Pesquisar por título" />

      <Profile to={"/profile"}>
        <div>
          <strong>Bruno S. Velho</strong>
          <Link to="/">sair</Link>
        </div>

        <img src="http://github.com/vbruno.png" alt="Foto do usuário" />
      </Profile>
    </Container>
  );
}
