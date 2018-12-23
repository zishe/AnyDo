import axios from 'axios';

export class API {
  static baseURL = 'http://localhost:3000/api/v1/';

  static async getAll(model) {
    const response = await axios.get(API.baseURL + `${model}`);
    return await response.data;
  }

  static get = (model, id) => {
    return new Promise((resolve, reject) => {
      axios
        .get(API.baseURL + `${model}/${id}`)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  };
}
