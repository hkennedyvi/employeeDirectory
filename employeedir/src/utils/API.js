// import axios from "axios";
// const authKey = "4JQ5-UD1W-4SPU-H2BU";
// const queryUrl = "https://randomapi.com/api/koeody1d?key=" + authKey;

// // Export an object containing methods we'll use for accessing the Dog.Ceo API

// export default {
//   getEmployeeList: function() {
//     return axios.get(queryUrl);
//   }
import axios from "axios";
// Make a request for a user with a given ID

export default {
    search: function() {
      return axios.get('https://randomuser.me/api/?results=10');
    }
  };