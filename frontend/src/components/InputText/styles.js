import styled from "styled-components";

export const Container = styled.input`
  width: 100%;

  padding: 16px 24px;
  border-radius: 10px;
  border: none;
  background: ${({ theme }) => theme.COLORS.GRAY_800};
  color: ${({ theme }) => theme.COLORS.WHITE};
`;
