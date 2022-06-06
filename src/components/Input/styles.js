import styled from "styled-components";

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const LabelAbove = styled.label`
  padding: 10px 0;
  color: var(--blue);
  font-weight: 600;
  text-align: left;
`;

export const InputBelow = styled.input`
  width: 327px;
  height: 51px;
  color: var(--yellow);
  background-color: var(--lightestGray);
  font-weight: 500;
  margin-top: 5px;
  padding: 8px 16px;
  border-radius: 100px;
  border: solid 2px var(--yellow);
`;
