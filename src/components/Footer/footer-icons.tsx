import { styled } from "styled-components";
import { GithubIcon } from "../Header/headerIcons/github-icon";
import { InstagramIcon } from "../Header/headerIcons/instagram-icon";

const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 10px;
  margin-top: 20px;

  width: 100%;
  color: ${props => props.theme.icons};
`

function FooterIcons() {
  return(
    <Icons>
        <GithubIcon />
    </Icons>
  );
};

export default FooterIcons;