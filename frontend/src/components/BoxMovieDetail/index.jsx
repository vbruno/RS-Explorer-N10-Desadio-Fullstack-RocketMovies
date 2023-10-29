import { Container, Tags } from "./styles";

import { StarRate } from "../StarRate";
import { Tag } from "../Tag";

export function BoxMovieDetail({ title, description, tags, rate }) {

  return (
    <Container>
      <h1>{title}</h1>
      <StarRate value={rate} />
      <p>{description.substring(0, 288).concat("...")}</p>
      < Tags >
        {tags && tags.map((tag, index) => (
          <Tag key={index}>{tag}</Tag>
        ))
        }
      </Tags>
    </Container>
  );
}
