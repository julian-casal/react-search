import styled from "styled-components";

export const TextListItem = styled.li`
  list-style: none;
  padding: 15px 30px;
  border-bottom: 1px solid #3c3c3c;
  font-size: 24px;
  &:last-child {
    border-bottom: none;
  }
`;

export const InfoBox = styled.div`
  font-size: 30px;
  border-radius: 5px;
  padding: 10px;
  transition: all 0.2s ease-out;
  margin-top: 20px;
  background-color: #3c3c3c;
`;
