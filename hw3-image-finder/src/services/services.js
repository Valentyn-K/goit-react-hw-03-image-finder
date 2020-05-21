import axios from "axios";

// const headers = new Headers({
//   Authorization: "&key=15837694-cfd882bdab50e7e30ec0ef461",
// });

// const options = {
//   headers,
//   credentials: "include",
// };

const baseUrl = "https://pixabay.com/api/?q=";
const page = "&page=";
const key = "&key=15837694-cfd882bdab50e7e30ec0ef461";
const requestParams = "&image_type=photo&orientation=horizontal&per_page=12";

export const axiosRequest = (searchQuery, pageNumber = 1) => {
  return axios.get(
    baseUrl + searchQuery + page + pageNumber + key + requestParams
  );
};
