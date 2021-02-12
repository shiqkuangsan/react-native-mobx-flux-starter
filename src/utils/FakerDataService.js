import faker from 'faker';

class FakerDataService {

  getFakerData = (number = 15, startId = 0) => {
    const dataArr = [];
    for (let i = 0; i < number; i++) {
      const name = faker.name.firstName();
      const lastName = faker.name.lastName();
      const desc = faker.random.words(5);
      const image = faker.image.avatar();
      dataArr.push({ id: i + startId, name, lastName, desc, image });
    }
    return dataArr;
  };

  getFakerUser = (options) => {
    const username = faker.name.firstName();
    const avatar = faker.image.avatar(100, 100);
    const header = faker.image.image(800, 400);
    const display_name = faker.name.lastName();
    const note = faker.random.words(5);
    const followers_count = faker.random.number();
    const following_count = faker.random.number();
    const statuses_count = faker.random.number();
    return {
      username,
      avatar,
      header,
      display_name,
      note,
      followers_count,
      following_count,
      statuses_count,
      ...options,
    }
  }
}

export default new FakerDataService();
