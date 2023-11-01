import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { Container, Content, Form, Bookmarks, Action } from "./style";

import { Header } from "../../components/Header";
import { InputText } from "../../components/InputText";
import { InputTextarea } from "../../components/InputTextarea";
import { Marker } from "../../components/Marker";
import { Button } from "../../components/Button";

import { api } from "../../services/api";

export function CreateMovie() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  function handleBack() {
    navigate(-1);
  }

  function handleAddTag() {
    if (!newTag) return;
    if (tags.includes(newTag)) return;

    setTags([...tags, newTag]);
    setNewTag("");
  }

  function handleDeleteTag(tag) {
    const newTags = tags.filter((item) => item !== tag);
    setTags(newTags);
  }

  async function handleCreateMovie() {
    const movie = {
      title,
      rating,
      description,
      tags,
    };

    try {
      const response = await api.post("/movies/create", movie);

      if (response.data) {
        alert("Filme criado com sucesso");
        navigate("/home");
      }
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Erro ao logar usuário, tente novamente mais tarde");
      }
    }
  }

  return (
    <Container>
      <Header />
      <Content>
        <button onClick={handleBack}>
          <FiArrowLeft />
          <span>Voltar</span>
        </button>
        <Form>
          <h1>Novo Filme</h1>
          <div>
            <InputText
              placeholder="Título"
              onChange={(e) => setTitle(e.target.value)}
            />
            <InputText
              placeholder="Sua Nota (de 0 a 5)"
              onChange={(e) => setRating(e.target.value)}
            />
          </div>
          <InputTextarea
            placeholder="Observações"
            onChange={(e) => setDescription(e.target.value)}
          />
          <Bookmarks>
            <h1>Marcadores</h1>
            <div>
              {tags &&
                tags.map((tag, index) => (
                  <Marker
                    key={index}
                    value={tag}
                    onClick={() => handleDeleteTag(tag)}
                  />
                ))}
              <Marker
                isNew
                onClick={handleAddTag}
                value={newTag}
                onChange={(e) => setNewTag(e.target.value)}
              />
            </div>
          </Bookmarks>
          <Action>
            <Button title={"Excluir filme"} variant />
            <Button title={"Salvar alterações"} onClick={handleCreateMovie} />
          </Action>
        </Form>
      </Content>
    </Container>
  );
}
