import { observable, action, runInAction, reaction } from 'mobx';
import { API } from '../adapters/Api';

export class ProductStore {
  @observable products = [];
  @observable modifyingProduct = {};
  @observable modificationData = {};
  @observable ingredientsModification = {};
  @observable lastProduct = null;
  @observable showProduct;
  @observable isLoading = true;

  constructor(rootStore) {
    this.rootStore = rootStore;
    reaction(
      () => this.modifyingProduct,
      value => {
        return this.productChanged(value);
      }
    );
  }

  productChanged = value => {
    console.log('productChanged');
    console.log(value);

    this.modificationData = {};
    this.ingredientsModification = {};
  };

  @action
  fetchAll = async () => {
    const products = await API.getAll('products');

    runInAction('Load all products', () => {
      console.log(products);
      this.products = products;
      this.isLoading = false;
    });
  };

  @action
  fetchPopular = async () => {
    const products = await API.getAll('products');

    runInAction('Load all products', () => {
      console.log(products);
      this.products = products;
      this.isLoading = false;
    });
  };

  @action
  fetchById = async id => {
    if (id == null || id === undefined) return;
    const product = await API.get('products', id);

    runInAction('Load Product by Id', () => {
      console.log(product);
      this.lastProduct = product;
    });
  };

  @action
  loadProduct = async id => {
    if (id == null || id === undefined) return;
    const product = await API.get('products', id);

    runInAction('Load Product by Id', () => {
      this.showProduct = product;
    });
  };

  @action
  setModifyingProduct = id => {
    this.modifyingProduct = this.products.find(x => x.id === id);
    return this.modifyingProduct;
  };

  @action
  setModifyingProductData = obj => {
    Object.keys(obj).forEach(attr => {
      console.log(attr);

      this.modificationData[attr] = obj[attr];
    });
    return this;
  };
}
