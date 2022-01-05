import styled from "styled-components";

export const TableStyled = styled.table`
  display: block;
  margin: 20px auto;
  width: 400px;
  border: solid 3px silver;
  border-radius: 20px;
  background-color: #234;
  color: white;
  text-align: center;
  font-family: verdana;
`;

export const TheadStyled = styled.thead`
  display: flex;
  justify-content: center;
`;

export const TbodyStyled = styled.tbody`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TrStyled = styled.tr`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ThStyled = styled.th`
  display: inline-block;
  padding: 20px;
`;

export const TdStyled = styled.td`
  display: inline-block;
  padding: 10px;
`;
