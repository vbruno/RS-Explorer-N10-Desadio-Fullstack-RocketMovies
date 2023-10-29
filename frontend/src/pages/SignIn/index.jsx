import { Link } from "react-router-dom";
import { FiMail, FiLock } from "react-icons/fi";

import { Container, Form, Background } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function SignIn() {
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Faça seu login</h2>

        <Input placeholder="E-mail" icon={FiMail} />
        <Input placeholder="password" icon={FiLock} type="password" />

        <Button title={"Entrar"} />

        <Link to={"/register"}>Criar conta</Link>
      </Form>

      <Background />
    </Container>
  );
}
