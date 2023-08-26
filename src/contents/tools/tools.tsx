'use client';

import { styled } from 'styled-components';
import Content from '@/contents/tools/tools.mdx';
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

function ToolsContent() {
  const isScrolling = useOnScroll(170);

  return (
    <Root>
      <Container>
        <PageTitle
          title="Ferramentas"
          description="Todas as linguagens de programação, tecnologias, softwares e ferramentas que uso."
        />
      </Container>
      <MDXContainer $isScrolling={isScrolling}>
        <Content />
      </MDXContainer>
    </Root>
  );
}

export default ToolsContent;
