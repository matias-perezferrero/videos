import axios from "axios";

const KEY = "AIzaSyC4D8zSUMs9DwdAq26EkzqNF-WpukfzRG0";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
