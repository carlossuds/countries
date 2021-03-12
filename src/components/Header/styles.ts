import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  background: ${props => props.theme.colors.elements};
  color: ${props => props.theme.colors.text};

  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1440px;
  height: 60px;
  padding: 0 50px;

  button {
    background: none;
    color: ${props => props.theme.colors.text};

    display: flex;
    align-items: center;

    font-weight: 800;
    text-transform: capitalize;

    svg {
      margin-right: 10px;
    }
  }
`;
