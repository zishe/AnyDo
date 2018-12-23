import { observable } from 'mobx';

export class UIStore {
  @observable shoppingCartOpen = false;
  @observable productModificationOpen = false;

  constructor() {}
}
