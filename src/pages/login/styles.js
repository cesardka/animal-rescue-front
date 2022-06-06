import styled from "styled-components";

export const AppWrapper = styled.div`
  text-align: center;
  background-color: white;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const AppHeader = styled.header`
  background-color: var(--primaryBackgroundColor);
  height: 30rem;
  padding: 8rem 0 3rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: var(--primaryFontColor);
`;

export const AppLogo = styled.img`
  max-height: 20rem;
  pointer-events: none;
`;

export const AppTitle = styled.p`
  font-family: Inter;
  font-size: 36px;
  font-weight: 800;
  line-height: 44px;
  padding: 2rem 0 0.4rem 0;
`;

export const AppSubtitle = styled.span`
  font-family: Inter;
  font-size: 16px;
  font-weight: 600;
  line-height: 19px;
  color: var(--tertiaryFontColor);
`;

export const LoginWrapper = styled.div`
  display: flex;
  height: 300px;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 3rem 5rem;
  margin-bottom: auto;
`;

export const FormWrapper = styled.form`
  display: flex;
  height: 300px;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 3rem 5rem;
  margin-bottom: auto;
`;
