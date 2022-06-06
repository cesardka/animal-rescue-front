import styled from "styled-components";
import { PaginationSlider } from "../../components/Slider";

const FichaAnimalWrapper = styled.div`
  padding: 20px;
  max-width: 700px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const FichaAnimalItem = styled.div`
  width: 100%;
  &:not(:last-of-type) {
    border-bottom: 2px dotted var(--lighterGray);
    padding-bottom: 20px;
    margin-bottom: 20px;
  }
`;

const FichaAnimalFoto = styled(PaginationSlider)`
  border: 5px;
  width: 100%;
  height: 300px;
  margin-bottom: 15px;
`;

const FichaAnimalNome = styled.h3`
  font-weight: bolder;
  color: var(--black);
`;

const FichaAnimalDescricao = styled.p`
  margin: 0.5rem 0 0.25rem 10px;
  color: var(--black);
`;

const FichaAnimalPublicadoEm = styled.h6`
  margin-left: 10px;
  color: var(--lightGray);
`;

export {
  FichaAnimalWrapper,
  FichaAnimalItem,
  FichaAnimalFoto,
  FichaAnimalNome,
  FichaAnimalDescricao,
  FichaAnimalPublicadoEm,
};
