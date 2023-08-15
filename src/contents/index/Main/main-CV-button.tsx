import { styled } from 'styled-components';
import { ButtonIcon } from '@/components/icons/button-icon';
import Link from 'next/link';

const ButtonContainer = styled.div`
  display: flex;
  position: relative;
`

const Button = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  gap: 5px;
  border: none;
  padding: 12px 16px;
  background: transparent;
  border-radius: 21px;
  font-weight: bold;
  font-size: 14px;
  line-height: 18px;
  color: ${props => props.theme.text};
  cursor: pointer;
  text-decoration: none;

  &:hover {
    color: ${props => props.theme.textBold};
  };
  &:active {
    scale: 0.96;
    border: none;
  };
`

function CurriculoButton() {

  return (
    <ButtonContainer>
      <Link href="https://to.preis.tech/cv">
          <Button><ButtonIcon/>Currículo</Button>
      </Link>
    </ButtonContainer>
  );
};

export default CurriculoButton;