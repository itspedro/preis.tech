import Link from "next/link";
import styled from "styled-components";

interface LinksProps {
  name: string;
  url: string;
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

const FooterColItem = styled.div`
  color: ${props => props.theme.textLight};
  font-size: 10px;
  font-family: inherit;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.8px;
  text-decoration: none;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    color: ${props => props.theme.textBold};
  };
`

const FooterColTitle = styled.h3`
  color: ${props => props.theme.text80};
  font-size: 10px;
  font-family: inherit;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.8px;
`

function FooterCol(props: FooterColsProps) {

  return (
    <FooterColContainer>
      <FooterColTitle>{props.title}</FooterColTitle>
      {props.links.map((link, index) => {
        return (
          <Link key={index} href={link.url}>
            <FooterColItem key={index}>{link.name}</FooterColItem>
          </Link>
        )
      })}
    </FooterColContainer>

  );
};

export default FooterCol;