import styled from 'styled-components';
import { GithubIcon } from '@/components/icons/github-icon';
import { LightThemeIcon } from '@/components/icons/light-theme-icon';
import Link from 'next/link';
import useTheme from '@/hooks/useTheme';
import { DarkThemeIcon } from '@/components/icons/dark-theme-icon';
import { LineIcon } from '@/components/icons/line-icon';

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
  color: ${props => props.theme.textBold};
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: rgba(85, 189, 179, 0.1);
  };
  &:active {
    scale: 0.96;
    border: none;
    
  };
`

const Icons = styled.div`
  color: ${props => props.theme.icons};
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
`

function HeaderControl() {

  const { themeTitle, toggleTheme } = useTheme();

  return(
    <ControlContainer>
      <Link aria-label="GitHub" href="https://github.com/itsPedro">
        <Icons>
          <GithubIcon />
        </Icons>
      </Link>
      <LineIcon />
      <ToggleThemeButton aria-label="Tema" onClick={toggleTheme}>
        {themeTitle === 'light' ? <DarkThemeIcon /> : <LightThemeIcon />}
      </ToggleThemeButton>
    </ControlContainer>
  );

};

export default HeaderControl;