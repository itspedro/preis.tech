'use client';

import { styled } from 'styled-components';
import Content from '@/contents/contact/contact.mdx';
import { MDXContainer } from '@/styles/mdx-component';
import useOnScroll from '@/hooks/useOnScroll';
import PageTitle from '@/components/page-title';
import { addOpacity } from '@/utils/misc';

const Root = styled.div.attrs({ className: 'bg-image' })`
  display: flex;
  flex-direction: column;
  gap: 50px;
  background: linear-gradient(
    180deg,
    ${(props) => addOpacity(props.theme.primary, 0.2)} 35%,
    transparent 100%
  );
  padding: 200px 16px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

function ContactContent() {
  const isScrolling = useOnScroll(170);

  return (
    <Root>
      <Container>
        <PageTitle
          title="Contato"
          description="Entre em contato comigo à qualquer momento, através das redes sociais ou e-mail."
        />
      </Container>
      <MDXContainer $isScrolling={isScrolling}>
        <Content />
      </MDXContainer>
    </Root>
  );
}

export default ContactContent;
