import { CategoryStore } from './CategoryStore';
import { ProductStore } from './ProductStore';
import { ShoppingCartStore } from './ShoppingCartStore';
import { RouterState, RouterStore } from 'mobx-state-router';
import { routes } from '../config/Routes';

const notFound = new RouterState('notFound');

export class RootStore {
  constructor() {
    this.categoryStore = new CategoryStore(this);
    this.productStore = new ProductStore(this);
    this.shoppingCartStore = new ShoppingCartStore(this);
    this.routerStore = new RouterStore(this, routes, notFound);
  }
}
