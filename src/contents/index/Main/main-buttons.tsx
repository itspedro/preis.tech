import styled from 'styled-components';
// import CurriculoButton from './main-CV-button';
import TalkButton from './main-Talk-button';
import { motion } from 'framer-motion';

const Root = styled(motion.div)`
  display: flex;
`

function MainButtons() {
  return (
    <Root
      initial="hide"
      animate="show"
    >
      <TalkButton />
    </Root>
  );
};

export default MainButtons;