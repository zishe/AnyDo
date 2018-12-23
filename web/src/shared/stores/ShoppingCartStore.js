import { observable, action, computed } from 'mobx';

export class ShoppingCartStore {
  @observable products = [];
  @observable paid = true;
  @observable modifyingProduct = null;

  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  // @computed get productCount(product) {
  //   return this.products.filter(item => item.id === product.id).length;
  // }

  @computed
  get size() {
    return this.products.length;
  }

  @action
  addProduct = (product, modificationData, ingredientsModification) => {
    this.products.push({
      product: product,
      modificationData: modificationData,
      ingredientsModification: ingredientsModification
    });
  };

  @action
  removeProduct = product => {
    this.products = this.products.filter(item => item.product !== product);
  };
}
