import { useNavigate } from "react-router-dom";
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";
import { Container, Form, Avatar } from "./styles";

import { InputText } from "../../components/InputText";
import { Button } from "../../components/Button";

export function Profile() {
  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  return (
    <Container>
      <header>
        <button onClick={handleBack}>
          <FiArrowLeft />
          <span>Voltar</span>
        </button>
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
