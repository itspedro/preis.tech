'use client';

import styled from 'styled-components';
import FooterCols from './footer-cols';

const FooterRoot = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 250px;
  background-color: var(--text-color);
  gap: 50px;
`
function Footer() {
  return (
    <FooterRoot>
      <FooterCols 
        title="Links Úteis"
        links={[
          { name: "Instagram", url: "https://instagram.com/itspdro" },
          { name: "Código Fonte", url: "https://github.com/itspedro/preis.tech" },
        ]}
      />
      <FooterCols 
        title="Sobre Mim"
        links={[
          { name: "Currículo", url: "https://cutt.ly/HwukbJnT" },
          { name: "Contate-me", url: "mailto:contato@preis.tech" },
        ]}
      />
    </FooterRoot>
  );
};

export default Footer;