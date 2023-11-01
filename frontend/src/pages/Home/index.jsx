import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FiPlus } from "react-icons/fi";

import { Container, Content } from "./styles";

import { api } from "../../services/api";

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { BoxMovieDetail } from "../../components/BoxMovieDetail";

export function Home() {
  const navigate = useNavigate();

  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  function handleAddMovie() {
    navigate("/create-movie");
  }

  useEffect(() => {
    async function loadMovies() {
      const response = await api.get("/movies/showAll");

      setMovies(response.data);
    }

    loadMovies();
  }, []);

  return (
    <Container>
      <Header />
      <Content>
        <div>
          <h1>Meus filmes</h1>
          <Button
            title={"Adicionar filme"}
            icon={FiPlus}
            onClick={handleAddMovie}
          />
        </div>
        <section>
          {movies &&
            movies.map((movie, index) => (
              <BoxMovieDetail
                key={index}
                title={movie.title}
                rate={movie.rating}
                description={movie.description}
                tags={movie.tags}
              />
            ))}
        </section>
      </Content>
    </Container>
  );
}
