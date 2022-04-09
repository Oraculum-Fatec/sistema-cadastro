import axios from "axios";

export default {
  postUser: (userData) => {
    var status = null;
    axios
      .post("http://localhost:8081/users", userData)
      .then((response) => (status = response))
      .catch((e) => console.log(e));
    return status;
  },
};
