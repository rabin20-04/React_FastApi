import axios from "axios";
import config from "../config/config";

const login = async ({ email, password }) => {
  const response = await axios.post(`${config.baseApiUrl}/api/auth/login`, {
    email,
    password,
  });
};
// return response;

export { login }; // to use login function

//  sending frontend user input or data  to backend ---post

/////------------------------------------
// const response ma hamile le request pathauxau url lai then wait to use await we use aync to the main function

// axios use garera post garim jasma baseurl ko end point hit hunxa then we are sending data to that end point which is email and password
//  data pathauxam  email,
//  password,

// k k xa data
// email and password const login = async ({ email, password })
/////------------------------------------

// we send data to api or backend using post

//////////////phase 1
// import axios from "axios";
// import config from "../config/config";

// const login = ({ email, password }) => {
//   axios.post(`${config.baseApiUrl}/api/auth/login`, {email,password});
// };
