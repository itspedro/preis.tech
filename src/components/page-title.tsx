import styled from 'styled-components';
import { motion } from 'framer-motion';

const Title = styled.h2`
  font-size: 60px;
  font-family: inherit;
  font-style: normal;
  font-weight: 800;

  @media (max-width: 768px) {
    font-size: 40px;
  };
`

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 50%;
  gap: 16px;

  @media (max-width: 768px) {
    width: 100%;
  };
`

const Desc = styled.p`
  font-size: 20px;
  font-family: inherit;
  font-style: thin;
  font-weight: 400;
  line-height: 24px;
  margin: 0;
  color: ${props => props.theme.text70};

  @media (max-width: 768px) {
    font-size: 16px;
  };
`

const animation = {
  hide: { x: -38, opacity: 0 },
  show: { x: 0, opacity: 1, },
};

interface PageTitleProps {
  title: string;
  description: string;
};

function PageTitle({title, description}: PageTitleProps) {
  return (
    <Container
      initial={animation.hide}
      animate={animation.show}
      transition={{ delay: 0.1 }}
    >
      <Title>
        {title}
      </Title>
      <Desc>
        {description}
      </Desc>
    </Container>
  )
}

export default PageTitle;