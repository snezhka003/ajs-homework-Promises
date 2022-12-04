import GameSavingLoader from '../GameSavingLoader';

test('Проверка загрузки сохранения', (done) => {
  const expected = {
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1,
      name: 'Hitman',
      level: 10,
      points: 2000,
    },
  };
  const received = GameSavingLoader.load();
  received.then((saving) => {
    expect(saving).toEqual(expected);
    done();
  });
});
