import styled from 'styled-components';

const Title = styled.h2`
  font-size: 60px;
  font-family: inherit;
  font-style: normal;
  font-weight: 800;

  @media (max-width: 768px) {
    font-size: 32px;
  };
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 50%;
  gap: 16px;
`

const Desc = styled.p`
  font-size: 20px;
  font-family: inherit;
  font-style: thin;
  font-weight: 400;
  line-height: 24px;
  margin: 0;
  color: ${props => props.theme.text70};
`

function PreviewTitle() {
  return (
    <Container>
      <Title>
        Blog Pessoal
      </Title>
      <Desc>
        Aqui estão todos os artigos relacionados à projetos pessoais.
      </Desc>
    </Container>
  )
}

export default PreviewTitle;