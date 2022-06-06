import { useRef } from "react";
import { PrimaryButton, SecondaryButton } from "../../components/Button";
import { PasswordInput, TextInput } from "../../components/Input";
import { FormWrapper } from "./styles";

export const TelaCadastro = ({ irParaTela = () => {}, ...props }) => {
  const emailCadastro = useRef("");
  const nomeCadastro = useRef("");
  const senhaCadastro = useRef("");
  const confirmaSenhaCadastro = useRef("");

  const handleSubmitCadastro = (e) => {
    e.preventDefault();
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
      <PrimaryButton onClick={(e) => handleSubmitCadastro()}>
        Cadastrar
      </PrimaryButton>
      <SecondaryButton onClick={(e) => irParaTela("")}>Voltar</SecondaryButton>
    </FormWrapper>
  );
};
