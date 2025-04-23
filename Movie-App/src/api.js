import axios from "axios";

const apiKey = import.meta.env.VITE_TMDB_API_KEY;

const api = axios.create({ baseURL: "https://api.themoviedb.org/3" });

function getMovies(query = "") {
  return api
    .get(
      query
        ? `/search/movie?query=${encodeURIComponent(query)}`
        : `/discover/movie?sort_by=popularity.desc`,
      {
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
      }
    )
    .then((response) => {
      return response.data.results;
    })
    .catch((error) => {
      throw `Error fetching movies: ${error}`;
    });
}

export { getMovies };
