import styled from 'styled-components';
import CurriculoButton from './main-CV-button';
import TalkButton from './main-Talk-button';

const Root = styled.div`
  display: flex;
  gap: 13px;
`

function MainButtons() {
  return (
    <Root>
      <TalkButton />
      <CurriculoButton />
    </Root>
  );
};

export default MainButtons;