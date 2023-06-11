import styled from "styled-components";
import { GithubIcon } from "./headerIcons/github-icon";
import { LightThemeIcon } from "./headerIcons/light-theme-icon";

interface HeaderControlProps {

}

function Line() {
  return (
    <svg width="1" height="12" viewBox="0 0 1 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="0.5" y1="2.18557e-08" x2="0.499999" y2="12" stroke="#C0C0C0"/>
    </svg>
  );
}

const ControlContainer = styled.div`
  display: flex;
  align-items:center;
  gap: 10px;

  svg:not(:nth-child(2)){
    cursor: pointer;
  }

`


function HeaderControl(props: HeaderControlProps) {
  return(
    <ControlContainer>
      <GithubIcon />
      <Line />
      <LightThemeIcon />
    </ControlContainer>
  );
};

export default HeaderControl;