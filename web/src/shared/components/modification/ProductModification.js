import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';
import {
  Dialog,
  Button,
  DialogTitle,
  DialogContent,
  DialogActions,
  FormControl,
  InputLabel,
  Input,
  Typography
} from '@material-ui/core';
import styled from 'styled-components';
import IngredientList from './IngredientList';
import ModificationNote from './ModificationNote';

const Container = styled.div`
  && {
    flex: 1;
  }
`;

const ModificationDialog = styled(Dialog)`
  && > div {
    &:nth-child(2) {
      max-width: 1600px;
      width: 700px;
      height: 700px;
    }
  }
`;

const ProductTitle = styled(DialogTitle)`
  && {
    /* min-width: 600px; */
    padding-bottom: 5px;
  }
`;

const ItemPreview = styled.div`
  && {
    height: 190px;
    /* width: 400px; */
    border-radius: 0;
    float: right;
    position: absolute;
    right: 28px;
    top: 10px;
  }
`;

const WeightHelpText = styled(Typography)`
  && {
    font-size: 14px;
  }
`;

const Form = styled.form`
  && {
    float: left;
  }
`;

const ProductImage = styled.img`
  && {
    height: 190px;
  }
`;

const IngredientsTitle = styled(Typography)`
  && {
    margin-top: 65px;
    font-family: 'Roboto';
  }
`;

const ProductData = styled(DialogContent)`
  && {
    overflow: visible;
  }
`;

@inject('uiStore')
@inject('store')
@observer
class ProductModification extends Component {
  static propTypes = {
    product: PropTypes.object
  };

  constructor(props) {
    super(props);
    this.product = this.props.store.shoppingCartStore.modifyingProduct;
  }

  handleDialogOpen = () => {
    this.props.uiStore.productModificationOpen = true;
  };

  handleDialogClose = () => {
    this.props.store.productStore.modifyingProduct = null;
    this.props.uiStore.productModificationOpen = false;
  };

  handleModifyChange = e => {
    this.props.store.productStore.setModifyingProductData({
      servingWeight: e.target.value
    });
  };

  handleDialogSubmit = () => {
    this.props.store.shoppingCartStore.addProduct(
      this.props.store.productStore.modifyingProduct,
      this.props.store.productStore.modificationData,
      this.props.store.productStore.ingredientsModification
    );
    this.handleDialogClose();
  };

  render() {
    const { uiStore, store, fullScreen } = this.props;

    let product = this.props.store.productStore.modifyingProduct;
    console.log('product');
    console.log(product);

    return (
      product && (
        <Container>
          <ModificationDialog
            // contentStyle={{width: 700}}
            fullScreen={fullScreen}
            open={uiStore.productModificationOpen}
            onClose={this.handleDialogClose}
            aria-labelledby="responsive-dialog-title"
          >
            <ProductTitle id="responsive-dialog-title">{product.name}</ProductTitle>
            <ItemPreview>
              <ProductImage src={product.image} alt={product.name} />
            </ItemPreview>

            <ProductData>
              <Form autoComplete="off">
                <FormControl>
                  <InputLabel htmlFor="name-simple">Вес</InputLabel>
                  <Input
                    name="name-simple"
                    value={store.productStore.modificationData.servingWeight}
                    onChange={this.handleModifyChange}
                  />
                  <WeightHelpText>
                    Вес страндартной порции {product.servingWeight} гр.
                  </WeightHelpText>
                </FormControl>
                <IngredientsTitle variant="title" gutterBottom>
                  Ингредиенты:
                </IngredientsTitle>
                <IngredientList product={product} />
                <ModificationNote />
              </Form>
            </ProductData>

            <DialogActions>
              <Button onClick={this.handleDialogClose} color="primary">
                Вернуться
              </Button>
              <Button onClick={this.handleDialogSubmit} color="primary" autoFocus>
                Добавить
              </Button>
            </DialogActions>
          </ModificationDialog>
        </Container>
      )
    );
  }
}

export default ProductModification;
