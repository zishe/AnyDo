import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import {
  Dialog,
  Button,
  DialogTitle,
  DialogContent,
  withMobileDialog,
  DialogActions
} from '@material-ui/core';
import styled from 'styled-components';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import ShoppingCartList from './ShoppingCartList';
import ShoppingCartOptions from './ShoppingCartOptions';

const Container = styled.div`
  && {
  }
`;

const ShoppingCartDialog = styled(Dialog)`
  && > div {
    &:nth-child(2) {
      max-width: 1600px;
      width: 700px;
      height: 700px;
    }
  }
`;

const CartTitle = styled(DialogTitle)`
  && {
  }
`;

const OpenDialogButton = styled(Button)`
  && {
    padding: 0;
    min-width: 55px;
    color: inherit;
  }
`;

const CartContent = styled(DialogContent)`
  && {
    flex: none;
  }
`;

const CartOptions = styled.div`
  && {
  }
`;

@inject('uiStore')
@observer
class ShoppingCart extends Component {
  handleDialogOpen = () => {
    this.props.uiStore.shoppingCartOpen = true;
  };

  handleDialogClose = () => {
    this.props.uiStore.shoppingCartOpen = false;
  };

  render() {
    const { uiStore, fullScreen } = this.props;

    return (
      <Container>
        <OpenDialogButton onClick={this.handleDialogOpen}>
          <ShoppingBasket />
        </OpenDialogButton>
        <ShoppingCartDialog
          fullScreen={fullScreen}
          open={uiStore.shoppingCartOpen}
          onClose={this.handleDialogClose}
          aria-labelledby="responsive-dialog-title"
        >
          <CartTitle id="responsive-dialog-title">Заявка</CartTitle>
          <CartContent>
            <ShoppingCartList />
          </CartContent>
          <CartOptions>
            <ShoppingCartOptions />
          </CartOptions>
          <DialogActions>
            <Button onClick={this.handleDialogClose} color="primary">
              Вернуться
            </Button>
            <Button onClick={this.handleDialogClose} color="primary" autoFocus>
              Продолжить
            </Button>
          </DialogActions>
        </ShoppingCartDialog>
      </Container>
    );
  }
}

export default withMobileDialog()(ShoppingCart);
