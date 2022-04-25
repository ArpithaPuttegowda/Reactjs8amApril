import axios from "axios";

export class ServerCall {
  static getCall(url) {
    return axios.get(url);
    // return fetch(url).then((res) => res.json());
  }
  static postCall(url, data) {
    return axios.post(url, data);
  }
}
