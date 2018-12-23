import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import styled from 'styled-components';

const Container = styled.div``;

@inject('store')
@observer
class TaskPageBase extends Component {
  render() {
    const { store } = this.props;

    return <Container>find task</Container>;
  }
}

export const FindTaskPage = TaskPageBase;
