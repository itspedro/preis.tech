'use client';

import styled from 'styled-components';
import FooterCol from './footer-cols';
import FooterSobre from './footer-about';

const FooterRoot = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 340px;
  background-color: ${props => props.theme.secondary};
`

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70%;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 50px;
  }

`

const FooterCols = styled.div`
  display: flex;
  align-items: start;
  gap: 50px;
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
              { name: "Contato", url: "mailto:contato@preis.tech" },
              { name: "Projetos", url: "https://github.com/itspedro?tab=repositories" },
              { name: "Currículo", url: "https://cutt.ly/HwukbJnT" }
            ]}
          />
          <FooterCol 
            title="Este site"
            links={[
              { name: "Blog", url: "/" },
              { name: "Código Fonte", url: "mailto:contato@preis.tech" },
            ]}
            />
        </FooterCols>
      </FooterContent>
    </FooterRoot>
  );
};

export default Footer;