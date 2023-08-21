import { styled } from 'styled-components';

const HrComponent = styled.hr`
  display: flex;
  height: auto;
  align-items: center;
  justify-content: center;

  &::after {
    content: '';
    height: 1px;
    width: 100%;
    background-color: ${props => props.theme.text};
  };
`


function CustomHr() {
  return <HrComponent />;
};

export default CustomHr;