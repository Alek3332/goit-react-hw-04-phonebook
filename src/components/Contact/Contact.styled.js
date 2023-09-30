import styled from 'styled-components';


 export const ContactListItem = styled.li`
  list-style: none;
  border-radius: 10px;
  padding: 7px 20px;
  margin-bottom: 5px;
  border: 1px solid black;
  display: flex;
  align-items: center;
  & {
    font-size: 20px;
  }
`;
export const ContactListItemName = styled.span`
  margin-right: 10px;
`;

export const ContactListItemNumber = styled.span`
  margin-right: 10px;
`;

export const ContactListItemButton = styled.span`
  background-color: lightgray;
  border: 0.5px solid gray;
  padding: 5px 10px;
  border-radius: 7px;
  & {
    :hover {
      background-color: blue;
    }
  }
`;