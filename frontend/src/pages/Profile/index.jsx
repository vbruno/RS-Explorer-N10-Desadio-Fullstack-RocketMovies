import { Link } from "react-router-dom";
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";
import { Container, Form, Avatar } from "./styles";

import { InputText } from "../../components/InputText";
import { Button } from "../../components/Button";

export function Profile() {
  return (
    <Container>
      <header>
        <Link to="/">
          <FiArrowLeft />
          <span>Voltar</span>
        </Link>
      </header>

      <Form>
        <Avatar>
          <img src="http://github.com/vbruno.png" alt="Foto do usuário" />

          <label htmlFor="avatar">
            <FiCamera />
            <input type="file" id="avatar" />
          </label>
        </Avatar>

        <InputText placeholder="Nome" type="text" icon={FiUser} />
        <InputText placeholder="E-mail" type="text" icon={FiMail} />
        <InputText placeholder="Senha atual" type="password" icon={FiLock} />
        <InputText placeholder="Nova senha" type="password" icon={FiLock} />

        <Button title={"Salvar"} />
      </Form>
    </Container>
  );
}
