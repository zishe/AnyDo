import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { TextField } from '@material-ui/core';

@inject('store')
@observer
class ModificationNote extends Component {
  static propTypes = {};

  render() {
    return (
      <div>
        <TextField
          // multiLine={true}
          rows={2}
          id="full-width"
          label="Комментарий"
          InputLabelProps={{
            shrink: true
          }}
          // placeholder="Получше прожарить!"
          helperText="Получше прожарить!"
          fullWidth
          margin="normal"
          value={this.props.store.productStore.modificationData.Note}
        />
      </div>
    );
  }
}

export default ModificationNote;
