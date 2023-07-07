import styled from 'styled-components';

const Container = styled.article`
  width: 70%;
  margin: 0 auto;
  padding: 16px;
  font-family: inherit;


  h1 {
    font-family: inherit;
    font-size: 32px;
    font-weight: 600;
    margin-bottom: 16px;
  };

  h2 {

  };

`

interface MDXstyleProps {
  children: React.ReactNode;
}

function MDXstyle({ children }: MDXstyleProps) {
  return (
    <Container>
      {children}
    </Container>
  );
};

export default MDXstyle;