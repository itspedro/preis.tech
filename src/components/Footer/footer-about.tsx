import { styled } from 'styled-components';
import FooterIcons from './footer-icons';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width:  240px;
  width: 100%;
  gap: 8px;

  @media (max-width: 768px) {
    margin-bottom: 50px;
  }
`

const Title = styled.span`
  color: ${props => props.theme.text80};
  font-size: 13px;
  font-family: inherit;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.8px;
`

const Text = styled.p`
  color: ${props => props.theme.text};
  font-size: 14px;
  font-family: inherit;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`

function FooterSobre() {
  return (
    <Container>
      <Title>Sobre Mim</Title>
      <Text>Um <strong>desenvolvedor</strong> que adora novos desafios e pensar fora da caixa.</Text>
      <FooterIcons/>
    </Container>
  );
};

export default FooterSobre;