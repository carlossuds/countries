import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 1440px;
  padding: 0 50px;
  padding-top: 50px;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.1);
    width: 120px;
    height: 40px;
    border-radius: 4px;
    background: ${props => props.theme.colors.elements};
    color: ${props => props.theme.colors.text};
    font-size: 14px;

    svg {
      margin-right: 5px;
    }
  }

  section {
    margin-top: 50px;

    img {
      width: 420px;
      height: 300px;
    }
  }
`;
