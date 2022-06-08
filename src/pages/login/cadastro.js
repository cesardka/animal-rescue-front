import { useRef } from "react";
import { PrimaryButton, SecondaryButton } from "../../components/Button";
import { PasswordInput, TextInput } from "../../components/Input";
import { FormWrapper } from "./styles";

import { useNavigate } from "react-router-dom";
import { cadastrarUsuario } from "../../services/user";

export const TelaCadastro = ({ irParaTela = () => {}, ...props }) => {
  const emailCadastro = useRef("");
  const nomeCadastro = useRef("");
  const senhaCadastro = useRef("");
  const confirmaSenhaCadastro = useRef("");

  const navigate = useNavigate();

  const handleSubmitCadastro = async (e) => {
    e.preventDefault();

    const campos = document.querySelectorAll("input");
    let camposInvalidos = 0;
    campos.forEach((c) => {
      if (c.value.trim() === "") {
        c.classList.add("invalid-value");
        camposInvalidos++;
      } else {
        c.classList.remove("invalid-value");
      }
    });

    if (camposInvalidos > 0) return;

    const retorno = await cadastrarUsuario({
      email: emailCadastro.current.value,
      nome: nomeCadastro.current.value,
      senha: senhaCadastro.current.value,
    });
    console.log(`Retorno cadastroUsuario: ${retorno}`);

    if (retorno.code !== 200) {
      alert("Não foi possível cadastrar este usuário!");
      return;
    }

    window.localStorage.removeItem("user_email");
    window.localStorage.setItem("user_email", emailCadastro.current.value);

    navigate("/");
  };

  return (
    <FormWrapper onSubmit={(e) => handleSubmitCadastro(e)}>
      <TextInput
        label="E-mail"
        name="email"
        ref={emailCadastro}
        value={emailCadastro.current.value}
      />
      <TextInput
        label="Nome"
        name="nome"
        ref={nomeCadastro}
        value={nomeCadastro.current.value}
      />
      <PasswordInput
        label="Senha"
        name="senha"
        ref={senhaCadastro}
        value={senhaCadastro.current.value}
      />
      <PasswordInput
        label="Confirme a senha"
        name="confirmaSenha"
        ref={confirmaSenhaCadastro}
        value={confirmaSenhaCadastro.current.value}
      />
      <PrimaryButton type="submit">Cadastrar</PrimaryButton>
      <SecondaryButton onClick={(e) => irParaTela("")}>Voltar</SecondaryButton>
    </FormWrapper>
  );
};
