import styled from 'styled-components';
import { motion } from 'framer-motion';

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

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 16px;
`


function ProjectTitle() {

  const animation = {
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0 },
  };


  return (
    <Container
      variants={animation}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true
      }}
    >
      <Label id="projetos">
        Projetos
      </Label>
      <Title>
        Alguns projetos que desenvolvi
      </Title>
    </Container>
  );
};

export default ProjectTitle;