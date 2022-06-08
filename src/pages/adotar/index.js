import { useState } from "react";
import { BlueButton } from "../../components/Button";
import { FormWrapper } from "../login/styles";
import { MatchPet } from "./match";
import {
  Cat,
  CatOrDogSection,
  Dog,
  OptionInput,
  OptionLabel,
  Section,
  SectionTitle,
} from "./styles";

export const Adotar = () => {
  const [especie, setEspecie] = useState("");
  const [idade, setIdade] = useState("");
  const [genero, setGenero] = useState("");
  const [porte, setPorte] = useState("");
  const [saude, setSaude] = useState([]);
  const [personalidade, setPersonalidade] = useState([]);
  const [petsBuscados, setPetsBuscados] = useState([]);

  const handleEspecie = (e) => {
    setEspecie(e);

    document
      .querySelector('section[data-testid="cat-or-dogs"]')
      ?.classList.add("slide-up");

    setPetsBuscados([
      {
        nome: "Nenecito",
        descricao: "Aquele que morde e assopra",
        especie,
        personalidade,
      },
      ...petsBuscados,
    ]);
  };

  const handleIdade = (e) => {
    const idadeSelecionada = e.target.value;
    setIdade(idadeSelecionada);
  };

  const handleGenero = (e) => {
    const generoSelecionado = e.target.value;
    setGenero(generoSelecionado);
  };

  const handlePorte = (e) => {
    const porteSelecionado = e.target.value;
    setPorte(porteSelecionado);
  };

  const handleSaude = (e) => {
    const saudesSelecionadas = e.target.checked
      ? [...saude, e.target.value]
      : saude.filter((s) => s !== e.target.value);

    setSaude(saudesSelecionadas);
  };

  const handlePersonalidade = (e) => {
    const personalidadesSelecionadas = e.target.checked
      ? [...personalidade, e.target.value]
      : personalidade.filter((p) => p !== e.target.value);

    setPersonalidade(personalidadesSelecionadas);
  };

  const filtrarAnimais = (e) => {
    e.preventDefault();

    console.log({
      especie,
      idade,
      genero,
      porte,
      saude,
      personalidade,
    });
  };

  return (
    <>
      <CatOrDogSection data-testid="cat-or-dogs">
        <Cat onClick={() => handleEspecie("gato")}>
          <img src="/images/bruxa-gato.svg" alt="Gato" />
          <label>Gato</label>
        </Cat>
        <Dog onClick={() => handleEspecie("cachorro")}>
          <img src="/images/dog-running.svg" alt="Cachorro" />
          <label>Cachorro</label>
        </Dog>
      </CatOrDogSection>

      {especie && !petsBuscados && (
        <div className="container">
          <FormWrapper
            style={{
              backgroundColor: "var(--lighterGray)",
            }}
            onSubmit={(e) => filtrarAnimais(e)}
          >
            <Section>
              <SectionTitle>Idade</SectionTitle>
              <OptionLabel>
                <OptionInput
                  type="radio"
                  name="idade"
                  value=""
                  checked={idade === ""}
                  onChange={(e) => handleIdade(e)}
                />
                Não me importo
              </OptionLabel>

              <OptionLabel>
                <OptionInput
                  type="radio"
                  name="idade"
                  value="minimo-de-6-meses"
                  onChange={(e) => handleIdade(e)}
                />
                Mínimo de 6 meses
              </OptionLabel>

              <OptionLabel>
                <OptionInput
                  type="radio"
                  name="idade"
                  value="entre-6-e-12-meses"
                  onChange={(e) => handleIdade(e)}
                />
                Entre 6 e 12 meses
              </OptionLabel>

              <OptionLabel>
                <OptionInput
                  type="radio"
                  name="idade"
                  value="mais-de-um-ano"
                  onChange={(e) => handleIdade(e)}
                />
                Mais de um ano
              </OptionLabel>

              <OptionLabel>
                <OptionInput
                  type="radio"
                  name="idade"
                  value="idoso"
                  onChange={(e) => handleIdade(e)}
                />
                Idoso
              </OptionLabel>
            </Section>

            <Section>
              <SectionTitle>Gênero</SectionTitle>
              <OptionLabel>
                <OptionInput
                  type="radio"
                  name="genero"
                  value=""
                  checked={genero === ""}
                  onChange={(e) => handleGenero(e)}
                />
                Não me importo
              </OptionLabel>

              <OptionLabel>
                <OptionInput
                  type="radio"
                  name="genero"
                  value="feminino"
                  onChange={(e) => handleGenero(e)}
                />
                Feminino
              </OptionLabel>

              <OptionLabel>
                <OptionInput
                  type="radio"
                  name="genero"
                  value="masculino"
                  onChange={(e) => handleGenero(e)}
                />
                Masculino
              </OptionLabel>
            </Section>

            <Section>
              <SectionTitle>Porte</SectionTitle>

              <OptionLabel>
                <OptionInput
                  type="checkbox"
                  name="porte"
                  value=""
                  onChange={(e) => handlePorte(e)}
                />
                Não me importo
              </OptionLabel>

              <OptionLabel>
                <OptionInput
                  type="checkbox"
                  name="porte"
                  value="PP"
                  onChange={(e) => handlePorte(e)}
                />
                PP
              </OptionLabel>

              <OptionLabel>
                <OptionInput
                  type="checkbox"
                  name="porte"
                  value="P"
                  onChange={(e) => handlePorte(e)}
                />
                P
              </OptionLabel>

              <OptionLabel>
                <OptionInput
                  type="checkbox"
                  name="porte"
                  value="M"
                  onChange={(e) => handlePorte(e)}
                />
                M
              </OptionLabel>

              <OptionLabel>
                <OptionInput
                  type="checkbox"
                  name="porte"
                  value="G"
                  onChange={(e) => handlePorte(e)}
                />
                G
              </OptionLabel>
            </Section>

            <Section>
              <SectionTitle>Saúde</SectionTitle>

              <OptionLabel>
                <OptionInput
                  type="checkbox"
                  name="saude"
                  value="com-todas-as-vacinas"
                  onChange={(e) => handleSaude(e)}
                />
                Com todas as vacinas
              </OptionLabel>

              <OptionLabel>
                <OptionInput
                  type="checkbox"
                  name="saude"
                  value="castrado"
                  onChange={(e) => handleSaude(e)}
                />
                Castrado
              </OptionLabel>
              <OptionLabel>
                <OptionInput
                  type="checkbox"
                  name="saude"
                  value="desmifurgado"
                  onChange={(e) => handleSaude(e)}
                />
                Desmifurgado
              </OptionLabel>

              <OptionLabel>
                <OptionInput
                  type="checkbox"
                  name="saude"
                  value="negativo-para-fiv-e-felv"
                  onChange={(e) => handleSaude(e)}
                />
                Negativo para FIV e FELV
              </OptionLabel>
            </Section>

            <Section>
              <SectionTitle>Personalidade</SectionTitle>

              <OptionLabel>
                <OptionInput
                  type="checkbox"
                  name="personalidade"
                  value="amigavel-com-cachorros"
                  onChange={(e) => handlePersonalidade(e)}
                />
                Amigável com cachorros
              </OptionLabel>

              <OptionLabel>
                <OptionInput
                  type="checkbox"
                  name="personalidade"
                  value="amigavel-com-gatos"
                  onChange={(e) => handlePersonalidade(e)}
                />
                Amigável com gatos
              </OptionLabel>

              <OptionLabel>
                <OptionInput
                  type="checkbox"
                  name="personalidade"
                  value="amigavel-com-criancas"
                  onChange={(e) => handlePersonalidade(e)}
                />
                Amigável com crianças
              </OptionLabel>

              <OptionLabel>
                <OptionInput
                  type="checkbox"
                  name="personalidade"
                  value="curioso"
                  onChange={(e) => handlePersonalidade(e)}
                />
                Curioso
              </OptionLabel>

              <OptionLabel>
                <OptionInput
                  type="checkbox"
                  name="personalidade"
                  value="sociavel"
                  onChange={(e) => handlePersonalidade(e)}
                />
                Sociável
              </OptionLabel>

              <OptionLabel>
                <OptionInput
                  type="checkbox"
                  name="personalidade"
                  value="dominante"
                  onChange={(e) => handlePersonalidade(e)}
                />
                Dominante
              </OptionLabel>

              <OptionLabel>
                <OptionInput
                  type="checkbox"
                  name="personalidade"
                  value="submisso"
                  onChange={(e) => handlePersonalidade(e)}
                />
                Submisso
              </OptionLabel>

              <OptionLabel>
                <OptionInput
                  type="checkbox"
                  name="personalidade"
                  value="brincalhao"
                  onChange={(e) => handlePersonalidade(e)}
                />
                Brincalhão
              </OptionLabel>

              <OptionLabel>
                <OptionInput
                  type="checkbox"
                  name="personalidade"
                  value="extrovertido"
                  onChange={(e) => handlePersonalidade(e)}
                />
                Extrovertido
              </OptionLabel>

              <OptionLabel>
                <OptionInput
                  type="checkbox"
                  name="personalidade"
                  value="calmo"
                  onChange={(e) => handlePersonalidade(e)}
                />
                Calmo
              </OptionLabel>

              <OptionLabel>
                <OptionInput
                  type="checkbox"
                  name="personalidade"
                  value="introspectivo"
                  onChange={(e) => handlePersonalidade(e)}
                />
                Introspectivo
              </OptionLabel>
            </Section>

            <BlueButton type="submit">Encontre meu pet</BlueButton>
          </FormWrapper>
        </div>
      )}

      {petsBuscados.length > 0 && <MatchPet {...petsBuscados[0]} />}
    </>
  );
};
