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

  select {
    background: ${props => props.theme.colors.elements};
    border: none;
    width: 100%;
    color: ${props => props.theme.colors.text};
    position: relative;
  }
`;
