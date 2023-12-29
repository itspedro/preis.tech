import { styled } from 'styled-components';
import { GithubIcon } from '@/components/icons/github-icon';
import { LinkedinIcon } from '@/components/icons/linkedin-icon';
import { BlueSkyIcon } from '@/components/icons/bluesky-icon';
import { InstagramIcon } from '@/components/icons/instagram-icon';
import Link from 'next/link';

const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 10px;
  margin-top: 20px;
  width: 100%;
`

const Icon = styled.span`
  color: ${props => props.theme.text80};
  font-size: 12px;

  &:hover {
    color: ${props => props.theme.icons};
  };
`

function FooterIcons() {
  return(
    <Icons>
      
      <Link aria-label="GitHub"  href="https://github.com/itsPedro" target="_blank">
        <Icon>
          <GithubIcon />
        </Icon>
      </Link>
      
      <Link aria-label="Linkedin" href="https://www.linkedin.com/in/itspedro" target="_blank">
        <Icon>
          <LinkedinIcon/>
        </Icon>
      </Link>

      <Link aria-label="BlueSky" href="https://www.bsky.app/profile/pedro.social" target="_blank">
        <Icon>
          <BlueSkyIcon />
        </Icon>
      </Link>

      <Link aria-label="Instagram" href="https://www.instagram.com/opedrosr" target="_blank">
        <Icon>
          <InstagramIcon />
        </Icon>
      </Link>
      
    </Icons>
  );
};

export default FooterIcons;