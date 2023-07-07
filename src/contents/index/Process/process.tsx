'use client';

import CardComponent from '@/components/Card';
import React from 'react';
import styled from 'styled-components';
import ProcessTitle from './process-title';


const Root = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  margin: 0 auto;
  gap: 50px;
  height: 800px;
`
const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const Preview = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, transparent, ${props => props.theme.secondary});
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 50px;

`


function ProcessSection() {
  return (
    <Root>

      <ProcessTitle />

      <CardContainer>
        <CardComponent
          number={1}
          title="Ideia"
          description="O desenvolvimento começa com uma ideia."
          icon={<span>Icon</span>}
        />
        <CardComponent
          number={2}
          title="Concepção"
          description="Em seguida, a ideia é transformada em um conceito."
          icon={<span>Icon</span>}
        />
        <CardComponent
          number={3}
          title="Teste [POC]"
          description="O conceito é desenvolvido e testado."
          icon={<span>Icon</span>}
        />
        <CardComponent
          number={4}
          title="Desenvolvimento"
          description="Após a aprovação, o desenvolvimento é iniciado."
          icon={<span>Icon</span>}
        />
      </CardContainer>
    </Root>
  );
};

export default ProcessSection;