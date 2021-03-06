import styled from "styled-components";

const BaseButton = styled.button`
  height: 51px;
  min-width: 209px;
  width: 327px;
  left: 29px;
  top: 571px;
  border-radius: 100px;
  padding: 16px, 32px, 16px, 32px;
`;

export const PrimaryButton = styled(BaseButton)(({ props }) => {
  return `
    color: var(--primaryFontColor);
    background-color: var(--primaryBackgroundColor);
  `;
});

export const SecondaryButton = styled(BaseButton)(({ props }) => {
  return `
      color: var(--secondaryFontColor);
      background-color: var(--secondaryBackgroundColor);
    `;
});

export const TertiaryButton = styled(BaseButton)(({ props }) => {
  return `
      color: var(--secondaryFontColor);
      background-color: var(--labelColor);
    `;
});

export const Button = ({ children }) => (
  <PrimaryButton>{children}</PrimaryButton>
);

export const BlueButton = styled(BaseButton)(({ props }) => {
  return `
    color: var(--white);
    background-color: var(--blue);
  `;
});
