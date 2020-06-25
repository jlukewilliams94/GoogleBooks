import axios from "axios";
//how do I get dotenv to work? this exposes my apikey, but it won't read from .env for some reason
const URL = "https://www.googleapis.com/books/v1/volumes?q=";
const APIKEY = "&key=AIzaSyDjdVY0ifwRRWZ9ixagxcxa46IHZZcWj-U";

export default {
  search: function (query) {
    return axios.get(URL + query + APIKEY);
  },
};

