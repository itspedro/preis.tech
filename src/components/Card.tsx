import styled from 'styled-components';

interface CardProps {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
};

const CardContainer = styled.button`
  display: flex;
  align-items: center;
  font-family: inherit;
  gap: 16px;
  border-radius: 16px;
  padding: 4px 8px;
  max-width: 400px;
  border: 1px solid ${props => props.theme.secondary};
  width: 100%;
  text-align: left;
  background-color: ${props => props.theme.secondary};
  color: ${props => props.theme.textLight};
  transition: 0.3s;

  &:hover {
    border: 1px solid ${props => props.theme.primary};
    color: ${props => props.theme.primary};
  };
`

const Number = styled.span`
  font-size: 72px;
  font-family: inherit;
  font-style: normal;
  font-weight: 500;
  color: ${props => props.theme.text70};
`

const CardContent = styled.span`
  flex-direction: column;
  gap: 4px;
`


const Title = styled.h2`
  font-size: 22px;
  font-family: inherit;
`

const Description = styled.p`
  color: ${props => props.theme.text70};
  font-size: 14px;
  font-family: inherit;
`


function CardComponent(props: CardProps) {
  return (
    <CardContainer>
      <Number>{props.number}</Number>
      <CardContent>
        <Title>{props.title}</Title>
        <Description>{props.description}</Description>
      </CardContent>
    </CardContainer>
  );
};

export default CardComponent;