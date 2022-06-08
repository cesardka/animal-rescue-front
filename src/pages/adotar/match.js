import axios from "axios";
import {
  FichaAnimalDescricao,
  FichaAnimalFoto,
  FichaAnimalItem,
  FichaAnimalNome,
  FichaAnimalPublicadoEm,
} from "../home/styles";
import { FichaAnimalPersonalidade } from "./styles";

const getPetImgUrl = (especie) => {
  let fetchUrl = "https://aws.random.cat/meow";
  if (especie === "cachorro")
    fetchUrl = "https://dog.ceo/api/breeds/image/random";

  return axios.get(fetchUrl, { "Access-Control-Allow-Origin": "*" });
};

const imgUrlFetch = (especie = "gato") => {
  const response = getPetImgUrl(especie).then((res) => {
    return especie === "gato" ? res?.data?.file : res?.data?.message;
  });

  return response;
};

export const MatchPet = (props) => {
  const { nome, descricao, especie, publicadoEm, personalidade = [] } = props;

  const response = imgUrlFetch(especie);
  const imgUrl = response;
  console.log({ response });

  return (
    <>
      <FichaAnimalItem>
        <FichaAnimalFoto images={imgUrl} descricao={descricao} />

        <FichaAnimalNome>{nome}</FichaAnimalNome>

        <FichaAnimalDescricao>{descricao}</FichaAnimalDescricao>

        <FichaAnimalPublicadoEm>
          {publicadoEm} de distância
        </FichaAnimalPublicadoEm>

        <FichaAnimalPersonalidade tipos={personalidade} />
      </FichaAnimalItem>

      <section id="match-pet">
        <div>Não é esse</div>
        <div>Quero adotar!</div>
      </section>
    </>
  );
};
