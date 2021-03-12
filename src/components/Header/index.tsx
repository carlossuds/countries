import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import { IoMoonOutline, IoMoonSharp } from 'react-icons/io5';

import { Container, Content } from './styles';

interface HeaderProps {
  toggleTheme(): void;
}

const Header: React.FC<HeaderProps> = ({ toggleTheme }) => {
  const { title } = useContext(ThemeContext);
  return (
    <Container>
      <Content>
        <h3>Where in the world?</h3>
        <button type="button" onClick={toggleTheme}>
          {title === 'dark' ? (
            <IoMoonSharp size={20} />
          ) : (
            <IoMoonOutline size={20} />
          )}
          Dark Mode
        </button>
      </Content>
    </Container>
  );
};

export default Header;
