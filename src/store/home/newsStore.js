import { makeAutoObservable } from 'mobx';
import faker from 'faker';
import FakerDataService from 'src/utils/FakerDataService';

class NewsStore {
  newsList: Array = [];

  constructor() {
    makeAutoObservable(this);
  }

  changeTitle() {
    this.newsList = FakerDataService.getFakerData(10);
  }
}

export default new NewsStore();
