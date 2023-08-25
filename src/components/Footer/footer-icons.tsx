import { styled } from 'styled-components';
import { GithubIcon } from '@/components/icons/github-icon';
import Link from 'next/link';
import { LinkedinIcon } from '@/components/icons/linkedin-icon';

const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 10px;
  margin-top: 20px;
  width: 100%;
`

const Icon = styled.span`
  color: ${props => props.theme.icons};
  font-size: 12px;
`

function FooterIcons() {
  return(
    <Icons>
      
      <Link href="https://github.com/itsPedro">
        <Icon>
          <GithubIcon />
        </Icon>
      </Link>
      
      <Link href="https://www.linkedin.com/in/itspedro">
        <Icon>
          <LinkedinIcon/>
        </Icon>
      </Link>
      
    </Icons>
  );
};

export default FooterIcons;