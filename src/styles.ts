import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const SearchInput = styled.input`
  color: white;
  padding: 10px;
  border-radius: 5px;
  border: none;
  font-size: 30px;
  background-color: #3e3e3e;
`;

interface InfoBoxProps {
  $isWordMatch: boolean;
}

export const InfoBox = styled.div<InfoBoxProps>`
  font-size: 30px;
  border-radius: 5px;
  padding: 10px;
  transition: all 0.2s ease-out;
  margin-top: 20px;
  background-color: ${({ $isWordMatch }) => ($isWordMatch ? "green" : "red")};
`;

export const NoSearchValue = styled.div`
  font-size: 30px;
  border-radius: 5px;
  padding: 10px;
`;
