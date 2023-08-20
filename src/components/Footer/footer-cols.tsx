import Link from 'next/link';
import styled from 'styled-components';
import { ExternalLinkIcon } from '../icons/external-link-icon';

interface LinksProps {
  id: number;
  name: string;
  url: string;
  $soon?: boolean;
  $new?: boolean;
};

interface FooterColsProps {
  title: string;
  links: LinksProps[];
};

const FooterColContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const Links = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const FooterColItem = styled.div<{ 
  $soon: boolean, 
  $new: boolean
}>`
  display: flex;
  gap: 5px;
  color: ${props => props.$soon ? props.theme.text70 : props.theme.textLight};
  font-size: 12px;
  font-family: inherit;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.8px;
  text-decoration: none;
  transition: 0.3s;
  ${props => !props.$soon && `
    &:hover {
      color: ${props.theme.textBold};
    };
  `};
  cursor: ${props => props.$soon ? "default" : "pointer"};

`

const FooterColTitle = styled.h3`
  color: ${props => props.theme.text80};
  font-size: 13px;
  font-family: inherit;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.8px;
`

const Label = styled.span`
  color: ${props => props.theme.textLight};
  font-size: 10px;
  font-family: inherit;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.8px;
  text-decoration: none;
  transition: 0.3s;
  border: 1px solid ${props => props.theme.textLight};
  border-radius: 10px;
  padding: 2px 4px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 8px;
  }
`

const ExternalLink = styled(Link)`
  color: ${props => props.theme.textLight};
  text-decoration: underline;
  transition: 0.3s;

  &:hover {
    color: ${props => props.theme.textBold};
  };

  svg {
    width: 12px;
  }

`

const isExternalLink = (link: string): boolean => {
  return link.includes('http');
};

function FooterCol(props: FooterColsProps) {
  return (
    <FooterColContainer key={props.title}>
      <FooterColTitle>{props.title}</FooterColTitle>
      <Links>
        {props.links.map((link) => {
          link.$soon = link.$soon ?? false;
          link.$new = link.$new ?? false;
          return isExternalLink(link.url) ? (
              <ExternalLink key={link.id} href={link.url} passHref>
                <FooterColItem 
                  $soon={link.$soon}
                  $new={link.$new}
                  >
                  {link.name}
                  <ExternalLinkIcon />
                  {link.$soon || link.$new ? (
                    <Label>
                      {link.$soon ? 'EM BREVE' : 'NOVO'}
                    </Label>
                  ): null}
                </FooterColItem>
              </ExternalLink>
            ) : (  
            <Link key={link.id} href={!link.$soon ? link.url : ''} passHref>
              <FooterColItem 
                $soon={link.$soon}
                $new={link.$new}
                >
                {link.name}
                {link.$soon || link.$new ? (
                  <Label>
                    {link.$soon ? 'EM BREVE' : 'NOVO'}
                  </Label>
                ): null}
              </FooterColItem>
            </Link>
          )
        })}
      </Links>
    </FooterColContainer>
  );
};

export default FooterCol;