import { runInAction, makeAutoObservable } from 'mobx';
import faker from 'faker';

class HomeStore {
  title: string = 'Home';

  constructor() {
    makeAutoObservable(this);
  }

  changeTitle() {
    runInAction(() => {
      this.title = faker.name.lastName();
    });
  }

  reset = () => {
    this.title = 'Home'
  }
}

export default new HomeStore();
