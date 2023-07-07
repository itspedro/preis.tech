import styled from 'styled-components';

const Label = styled.span`
  color: ${props => props.theme.primary};
  font-family: inherit;
  font-size: 15px;
  font-style: normal;
  font-weight: 800;
`

const Title = styled.h2`
  font-size: 32px;
  font-family: inherit;
  font-style: normal;
  font-weight: 800;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`


function ProcessTitle() {
  return (
    <Container>
      <Label>
        Projetos
      </Label>
      <Title>
        Processo de criação
      </Title>
    </Container>
  )
}

export default ProcessTitle