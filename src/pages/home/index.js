import { meusAnimais } from "./home.mock";
import {
  FichaAnimalDescricao,
  FichaAnimalFoto,
  FichaAnimalItem,
  FichaAnimalNome,
  FichaAnimalPublicadoEm,
  FichaAnimalWrapper,
} from "./styles";

const FichaAnimal = (props) => {
  const { nome, descricao, publicadoEm, imgUrl } = props;
  return (
    <FichaAnimalItem>
      <FichaAnimalFoto src={imgUrl} />
      <FichaAnimalNome>{nome}</FichaAnimalNome>
      <FichaAnimalDescricao>{descricao}</FichaAnimalDescricao>
      <FichaAnimalPublicadoEm>
        Publicado em {publicadoEm}
      </FichaAnimalPublicadoEm>
    </FichaAnimalItem>
  );
};

export const Home = () => (
  <FichaAnimalWrapper>
    {meusAnimais.map((animal, index) => (
      <FichaAnimal key={`animal_${index}`} {...animal} />
    ))}
  </FichaAnimalWrapper>
);
