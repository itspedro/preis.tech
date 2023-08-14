import Link from 'next/link';
import { styled } from 'styled-components';

const ButtonContainer = styled.div`
  display: flex;
  position: relative;
`

const Button = styled.button`
  color: #FFF;
  font-size: 14px;
  font-family: inherit;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  border: none;
  width: 145px;
  height: 42px;
  border-radius: 8px;
  background: ${props => props.theme.tertiary};
  cursor: pointer;

  &:hover {	
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  };
`

function TalkButton() {

  return (
    <ButtonContainer>
      <Link href="mailto:contato@preis.tech">
        <Button>Vamos Conversar</Button>
      </Link>
    </ButtonContainer>
  );
};

export default TalkButton;