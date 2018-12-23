import { observable, action, runInAction } from 'mobx';
import { API } from '../adapters/Api';

export class CategoryStore {
  @observable categories = [];
  @observable isLoading = true;

  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  @action
  fetchAll = async () => {
    const categories = await API.getAll('categories');

    runInAction('Load Categories', () => {
      console.log(categories);
      this.categories = categories;
      this.isLoading = false;
    });
  };
}
