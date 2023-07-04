import styled from 'styled-components';
import { GithubIcon } from './headerIcons/github-icon';
import { LightThemeIcon } from './headerIcons/light-theme-icon';
import Link from 'next/link';
import useTheme from '@/hooks/useTheme';
import { DarkThemeIcon } from './headerIcons/dark-theme-icon';

function Line() {
  return (
    <svg width="1" height="12" viewBox="0 0 1 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="0.5" y1="2.18557e-08" x2="0.499999" y2="12" stroke="#C0C0C0"/>
    </svg>
  );
};

const ControlContainer = styled.div`
  display: flex;
  align-items:center;
  gap: 10px;

  svg:not(:nth-child(2)){
    cursor: pointer;
  };
`

const ToggleThemeButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  padding: 8px;
  border-radius: 10px;
  color: ${props => props.theme.text};

  &:hover {
    background-color: rgba(85, 189, 179, 0.1);
  };
  &:active {
    scale: 0.96;
    border: none;
  };
`

const Icons = styled.div`
  color: ${props => props.theme.text};
  text-decoration: none;
`

function HeaderControl() {

  const { themeTitle, toggleTheme } = useTheme();

  return(
    <ControlContainer>
      <Link href="https://github.com/itsPedro">
        <Icons>
          <GithubIcon />
        </Icons>
      </Link>
      <Line />
      <ToggleThemeButton onClick={toggleTheme}>
        {themeTitle === 'light' ? <DarkThemeIcon /> : <LightThemeIcon />}
      </ToggleThemeButton>
    </ControlContainer>
  );

};

export default HeaderControl;