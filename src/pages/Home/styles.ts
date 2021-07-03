import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  justify-content: center;

  a {
    text-decoration: none;
    color: ${props => props.theme.colors.text};
  }
`;

export const CountryCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 270px;
  height: 350px;
  background: ${props => props.theme.colors.elements};
  border-radius: 4px;
  overflow: hidden;
  margin: 0 20px 50px 0;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.1);

  transition: all 0.25s ease;

  &:hover {
    transform: scale(1.02);
    background: ${props => shade(0.1, props.theme.colors.elements)};
  }

  img {
    width: 100%;
    height: 50%;
  }

  h4 {
    margin: 20px;
  }

  strong {
    margin-left: 20px;
    margin-bottom: 10px;

    font-size: 14px;
    font-weight: 800;
  }
  span {
    font-weight: 300;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 50px;

  width: 100%;
  max-width: 1440px;

  section:first-of-type {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
  }

  section + section {
    display: flex;
    flex: 1;
    flex-wrap: wrap;
    margin-top: 50px;
    gap: 1.5rem;
  }
`;
