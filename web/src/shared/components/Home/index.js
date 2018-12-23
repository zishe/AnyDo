import styled from 'styled-components';

import Button from './Button';
import Link from './Link';

const Home = styled.div`
  && input,
  select {
    font-family: 'Roboto';
  }
  && {
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
    margin-top: 10%;
  }
`;

Home.Button = Button;
Home.Link = Link;

export default Home;
