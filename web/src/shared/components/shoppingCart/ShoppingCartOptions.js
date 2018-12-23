import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import styled from 'styled-components';
import TimeInput from 'material-ui-time-picker';

const Container = styled.div`
  && {
    height: 80px;
    width: 80px;
    border-radius: 0;
    padding: 20px;
  }
`;

const Note = styled.div`
  && {
  }
`;

const DateTime = styled.div`
  && {
  }
`;

@inject('uiStore')
@inject('store')
@observer
class ShoppingCartOptions extends Component {
  static propTypes = {};

  handleChangeTime = time => {
    console.log(time);
  };

  render() {
    return (
      <Container>
        <DateTime>
          <TimeInput mode="12h" onChange={time => this.handleChangeTime(time)} />
        </DateTime>
        <Note />
      </Container>
    );
  }
}

export default ShoppingCartOptions;
