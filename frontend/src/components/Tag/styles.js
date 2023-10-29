import styled from "styled-components";

export const Container = styled.div`
  width: fit-content;

  padding: 5px 16px;
  border-radius: 8px;

  background: ${({ theme }) => theme.COLORS.GRAY_700};

  text-align: center;

`;
