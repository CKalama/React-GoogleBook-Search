import axios from "axios"


export default {
    // Gets all posts
    getPosts: function(searchResult) {
      return axios.get(`https://www.googleapis.com/books/v1/volumes?q=` + `${searchResult}` + `&filter=paid-ebooks&key=AIzaSyC9GWvnyd_oeBTnavwPxMOONUMq8eZ56hI`);
    },
    // Gets the post with the given id
    getPost: function(id) {
      return axios.get("/api/posts/" + id);
    },
    // Deletes the post with the given id
    deletePost: function(id) {
      return axios.delete("/api/posts/" + id);
    },
    // Saves a post to the database
    savePost: function(postData) {
      return axios.post("/api/generic/", postData);
    }
  };