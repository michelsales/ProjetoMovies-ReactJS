import React from 'react';
import SideBar from '../../components/SideBar';
import Content from '../../components/Content';

import { Container } from './styles';

const InitialPage = () => {
  return(
      <Container>
        <SideBar /> 
        <Content />
      </Container>
  );
}

export default InitialPage;