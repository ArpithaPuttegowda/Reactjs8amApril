class ServerCallService {
  static async get(url) {
    let res = await fetch(url);
    return res.json();
  }
  static async post(url, data) {
    let res = await fetch(url, {
      method: "POST",
      body: data
    });
    return res.json();
  }
}

export default ServerCallService;
