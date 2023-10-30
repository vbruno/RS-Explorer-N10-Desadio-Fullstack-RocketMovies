import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";
import { Container, Form, Avatar } from "./styles";

import { InputText } from "../../components/InputText";
import { Button } from "../../components/Button";

import { useAuth } from "../../hooks/authHook";

export function Profile() {
  const navigate = useNavigate();
  const { user } = useAuth();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

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

        <InputText
          placeholder="Nome"
          type="text"
          icon={FiUser}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <InputText
          placeholder="E-mail"
          type="text"
          icon={FiMail}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputText
          placeholder="Senha atual"
          type="password"
          icon={FiLock}
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
        />
        <InputText
          placeholder="Nova senha"
          type="password"
          icon={FiLock}
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />

        <Button title={"Salvar"} />
      </Form>
    </Container>
  );
}
