import styled from "styled-components";
import { PillsMenu } from "../../components/Pills";

export const CatOrDogSection = styled.section`
  width: 100%;
  height: 100vh;
  color: var(--orange);
  font-weight: bolder;
  font-size: 1.5rem;
  background-color: var(--yellow);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export const CatOrDog = styled.div`
  border: 2px solid var(--orange);
  border-radius: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px;

  &:hover {
    background: var(--white);
    transition: all 10s ease-in-out;
  }

  @media screen and (max-width: 700px) {
    padding: 60px;
  }
`;

export const Cat = styled(CatOrDog)(
  () => `
  border-top: 4px solid var(--orange);
  
  label {
    position: relative;
    top: 20px;
  }
`
);

export const Dog = styled(CatOrDog)(
  () => `
  border-bottom: 4px solid var(--orange);
`
);

export const Section = styled.section`
  width: 100%;
  color: var(--yellow);
  font-weight: 600;
  background-color: var(--white);
  display: grid;
  flex-direction: column;
  padding: 15px;
  margin-top: 10px;
  border-radius: 20px;
  &:last-of-type {
    margin-bottom: 10px;
  }
`;

export const SectionTitle = styled.h3`
  color: var(--blue);
  margin-bottom: 8px;
`;

export const OptionLabel = styled.label`
  margin-left: 32px;
  margin-top: 8px;
  margin-bottom: 4px;
`;

export const OptionInput = styled.input`
  font: inherit;
  appearance: none;
  outline: 2px solid var(--yellow);
  position: relative;
  top: 2px;
  padding: 5px 0;
  margin-right: 10px;

  display: inline-grid;
  place-content: center;
  width: 20px;
  height: 20px;
  border: 1px solid var(--yellow);
  border-radius: 1px;
  transform: translateY(-0.075em);

  &[type="checkbox"] {
    border-radius: 0px;
  }

  &[type="radio"] {
    border-radius: 50px;
  }

  &::before {
    content: "";
    width: 0.65em;
    height: 0.65em;
    clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
    transform: scale(0);
    transform-origin: bottom left;
    transition: 69ms transform ease-in-out;
    box-shadow: inset 1em 1em var(--yellow);
  }

  &:checked::before {
    transform: scale(1);
  }
`;

export const FichaAnimalPersonalidade = styled(PillsMenu)(() => {
  return `
  color: var(--white);
  display: flex;

  span {
    background-color: var(--blue);
    padding: 2px 5px;
  }
  `;
});
