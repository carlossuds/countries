import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin:0;
    padding: 0;
    box-sizing:border-box;
    outline: 0;
  }

  body{
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    -webkit-font-smoothing: antialised;
  }

  body, input, button {
    font-family: 'Nunito Sans', sans-serif;
    font-size: 16px;
    border: 0;
  }

  button {
    cursor: pointer;
  }
`;
