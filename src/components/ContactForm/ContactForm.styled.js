import styled from 'styled-components';

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;

  width: 50%;
`;

export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
`;
export const FormButtonSubmit = styled.button`
  padding: 5px 15px;
  background-color: lightblue;
  border-radius: 7px;
  margin-top: 10px;
  width: max-content;
  & {
    :hover {
      background-color: blanchedalmond;
    }
  }
`;