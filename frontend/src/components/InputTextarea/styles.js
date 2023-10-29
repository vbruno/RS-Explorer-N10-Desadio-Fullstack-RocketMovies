import styled from "styled-components";

export const Container = styled.textarea`
  width: 100%;
  height: 274px;

  margin-top: 40px;

  padding: 19px 16px;
  border: none;
  border-radius: 10px;

  background: ${({ theme }) => theme.COLORS.GRAY_800};
  color: ${({ theme }) => theme.COLORS.GRAY_000};

  resize: none;
`;
