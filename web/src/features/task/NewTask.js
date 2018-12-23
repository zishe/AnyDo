import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import styled from 'styled-components';
import NewTask from '../../shared/components/NewTask';

@inject('store')
@observer
class TaskPageBase extends Component {
  render() {
    const { store } = this.props;

    return (
      <NewTask>
        <NewTask.Form>
          <NewTask.CategorySelect />
        </NewTask.Form>
      </NewTask>
    );
  }
}

export const NewTaskPage = TaskPageBase;
