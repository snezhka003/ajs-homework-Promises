import json from './parser';
import read from './reader';
import GameSaving from './GameSaving';

export default class GameSavingLoader {
  static load() {
    return new Promise((resolve) => {
      const data = read();
      data.then((response) => {
        const value = json(response);
        return value;
      }).then((response) => {
        resolve(new GameSaving(JSON.parse(response)));
      });
    });
  }
}
