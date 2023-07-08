import styled from 'styled-components';

const Label = styled.span`
  color: ${props => props.theme.primary};
  font-family: inherit;
  font-size: 15px;
  font-style: normal;  
  font-weight: 800;
`

const Title = styled.h2`
  font-size: 40px;
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
  gap: 16px;
`


function PreviewTitle() {
  return (
    <Container>
      <Label>
        Blog
      </Label>
      <Title>
        Posts por ordem de publicação
      </Title>
    </Container>
  )
}

export default PreviewTitle;