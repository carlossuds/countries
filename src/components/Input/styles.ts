import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  width: 300px;
  border-radius: 4px;
  background: ${props => props.theme.colors.elements};
  padding: 8px 16px;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.1);

  input {
    background: none;
    color: ${props => props.theme.colors.text};
    font-size: 14px;
    font-weight: 300;
    flex: 1;

    ::placeholder {
      color: ${props => props.theme.colors.text};
      font-weight: 300;
    }
  }

  svg {
    margin-right: 16px;
    color: ${props => props.theme.colors.text};
  }
`;
