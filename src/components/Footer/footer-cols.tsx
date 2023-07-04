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
  color: #FFF;
  font-size: 14px;
  font-family: inherit;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.7px;
  text-decoration: none !important;
  transition: 0.3s;
  cursor: pointer;
`

const FooterColTitle = styled.h3`
  color: #FFF;
  font-size: 16px;
  font-family: inherit;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.8px;
  text-transform: uppercase;
`

function FooterCols(props: FooterColsProps) {

  return (
    <FooterColContainer>
      <FooterColTitle>{props.title}</FooterColTitle>
      {props.links.map((link, index) => {
        return (
          <Link key={index} href={link.url}>
            <FooterColItem key={index}>{link.name}</FooterColItem>
          </Link>
        );
        }
        )};
    </FooterColContainer>

  );
};

export default FooterCols;