import styled from "styled-components";

export const Container = styled.div`

  width: 100%;
  min-height: 223px;

  padding: 32px;

  background: ${({ theme }) => theme.COLORS.CHERRY};
  border-radius: 16px;


`;

export const Tags = styled.div`
 display: flex;
 flex-direction: row;
 gap: 8px;
 margin-top: 16px;
`;
