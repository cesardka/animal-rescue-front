import { useRef } from "react";
import { PrimaryButton, SecondaryButton } from "../../components/Button";
import { PasswordInput, TextInput } from "../../components/Input";
import { FormWrapper } from "./styles";
import { acessaUsuario } from "../../services/user";

export const TelaLogin = ({ irParaTela = () => {}, ...props }) => {
  const emailLogin = useRef("");
  const passwordLogin = useRef("");

  const handleSubmitLogin = async (e) => {
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

    const usuarioExiste = await acessaUsuario(
      emailLogin.current.value,
      passwordLogin.current.value
    );

    if (!usuarioExiste) {
      alert("Usuário / senha não existe!");
      return;
    }

    localStorage.setItem("user_email", emailLogin.current.value);
    window.location = "/";
  };

  return (
    <FormWrapper onSubmit={(e) => handleSubmitLogin(e)}>
      <TextInput
        label="E-mail"
        name="email"
        ref={emailLogin}
        value={emailLogin.current.value}
      />
      <PasswordInput
        label="Senha"
        name="senha"
        ref={passwordLogin}
        value={passwordLogin.current.value}
      />
      <PrimaryButton type="submit">Entrar</PrimaryButton>
      <SecondaryButton onClick={(e) => irParaTela("")}>Voltar</SecondaryButton>
    </FormWrapper>
  );
};
