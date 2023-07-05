import Link from "next/link";
import styled from "styled-components";

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

const SoonLabel = styled.span`
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
`


function FooterCol(props: FooterColsProps) {

  return (
    <FooterColContainer key={props.title}>
      <FooterColTitle>{props.title}</FooterColTitle>
      {props.links.map((link) => {
        link.$soon = link.$soon ?? false;
        link.$new = link.$new ?? false;
        return (
          <Link key={link.id} href={!link.$soon ? link.url : ''}>
            <FooterColItem 
              $soon={link.$soon}
              $new={link.$new}
            >
              {link.name}
              {link.$soon || link.$new ? (
                <SoonLabel>
                  {link.$soon ? 'Em Breve' : 'Novo!'}
                </SoonLabel>
              ): null}
            </FooterColItem>
          </Link>
        )
      })}
    </FooterColContainer>
  );
};

export default FooterCol;