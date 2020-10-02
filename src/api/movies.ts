import { get } from 'services/fetch';

export const getTrendMovies = (page: number) => {
    return get(`/trending/movie/week?page=${page}&`);
};

export const searchMovies = (page: number, query: string) => {
    return get(`/search/movie?page=${page}&query=${query}&`);
};

export const getMovieById = (movieId: string) => {
    return get(`/movie/${movieId}?`);
};

export const getTrailer = (movieId: string) => {
    return get(`/movie/${movieId}/videos?`);
};

export const getMovieCredits = (movieId: string) => {
    return get(`/movie/${movieId}/credits?`);
};

export const getActorDetails = (actorId: string) => {
  return get(`/person/${actorId}?`);
} 

export const getMoviesByActor = (actorId: string) => {
  return get(`/person/${actorId}/movie_credits?`);
} 
