'use client';

import styled from 'styled-components';
import FooterCol from './footer-cols';
import FooterSobre from './footer-about';

const FooterRoot = styled.footer.attrs({ className: 'bg-footer' })`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  max-height: 700px;
  height: 400px;
  background: linear-gradient(180deg, transparent, ${props => props.theme.secondary});
  position: relative;

  @media (max-width: 768px) {
    height: fit-content;
  };
`

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  margin: auto;

  @media (max-width: 1400px) {
    width: 80%;
  };

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    gap: 50px;
    width: 80%;
  };
`

const FooterCols = styled.div`
  display: flex;
  align-items: start;
  gap: 50px;

  @media (max-width: 768px) {
    flex-wrap: wrap;
  };
`

const FooterCopy = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #C9C9C933;
  height: 40px;
  align-items: center;

  @media (max-width: 1400px) {
    width: 80%;
  };
`

const Copy = styled.p`
  color:  rgba(196, 196, 196, 0.80);
  font-size: 10px;
  font-family: inherit;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.7px;
`


function Footer() {
  const code = '</>';
  return (
    <FooterRoot>
      <FooterContent>
        <FooterSobre />
        <FooterCols>
          <FooterCol 
            title="Este site"
            links={[
              { 
                id: 1,
                name: "Contato",
                url: "/contato",
              },
              { 
                id: 2,
                name: "Ferramentas",
                url: "/ferramentas",
              },
              { 
                id: 3,
                name: "Blog",
                url: "/blog",
              }
            ]}
            />
            <FooterCol 
            title="Links úteis"
            links={[
              { 
                id: 4,
                name: "Currículo",
                url: "https://to.preis.tech/cv"
              },
              {
                id: 5,
                name: "Código Fonte",
                url: "https://github.com/itsPedro/preis.tech",
              },
              { 
                id: 6,
                name: "Mais Projetos",
                url: "https://github.com/itsPedro?tab=repositories",
                $new: true
              }
            ]}
            />
        </FooterCols>
      </FooterContent>
      <FooterCopy>
        <Copy>© 2023 Pedro Reis.</Copy>
        <Copy>{code}</Copy>
      </FooterCopy>
    </FooterRoot>
  );
};

export default Footer;