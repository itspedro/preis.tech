'use client';

import styled from 'styled-components';
import FooterCol from './footer-cols';
import FooterSobre from './footer-about';

const FooterRoot = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 300px;
  background: linear-gradient(180deg, transparent, ${props => props.theme.tertiary});
`

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  margin: 0 auto;
  margin-bottom: 50px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 50px;
    width: 80%;
  };
`

const FooterCols = styled.div`
  display: flex;
  align-items: start;
  gap: 50px;
`

const FooterCopy = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #C9C9C9;
  height: 30px;
  align-items: flex-end;

  @media (max-width: 768px) {
    width: 80%;
  }
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
  return (
    <FooterRoot>
      <FooterContent>
        <FooterSobre />
        <FooterCols>
          <FooterCol 
            title="Trabalho"
            links={[
              { 
                id: 1,
                name: "Contato",
                url: "mailto:contato@preis.tech"
              },
              { 
                id: 2,
                name: "Projetos",
                url: "",
                $soon: true
              },
              { 
                id: 3,
                name: "Currículo",
                url: "https://cutt.ly/HwukbJnT"
              }
            ]}
          />
          <FooterCol 
            title="Este site"
            links={[
              { 
                id: 4,
                name: "Blog",
                url: "",
                $soon: true
              },
              {
                id: 5,
                name: "Código Fonte",
                url: "https://github.com/itsPedro/preis.tech",
                $new: true
              }
            ]}
            />
        </FooterCols>
      </FooterContent>
      <FooterCopy>
        <Copy>© 2023 Pedro Reis.</Copy>
        <Copy>Veja a última versão no GitHub.</Copy>
      </FooterCopy>
    </FooterRoot>
  );
};

export default Footer;