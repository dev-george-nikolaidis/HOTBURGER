import React from 'react';
import styled from 'styled-components';

interface Props {
  path: string;
}

const  NotFoundPage :React.FC<Props> = () => {

  return (
<Wrapper>
      404
</Wrapper>
);
};

export default NotFoundPage;


const Wrapper = styled.div``