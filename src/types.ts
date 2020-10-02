export interface IGenre {
    id: string;
    name: string;
}

export interface IMovieInformation {
    id: number;
    backdrop_path: string;
    original_title: string;
    overview: string;
    genres: IGenre[];
}

export interface IMovieListDetails {
    page: number;
    total_pages?: number;
    results: IMovieInformation[];
}

export interface IMovieCast {
    id: number;
    name: string;
    profile_path: string;
}
export interface IActors {
    cast: IMovieCast[];
}

export interface ITrailerDetails {
    key: string;
    site: string;
    type: string;
}

export interface ITrailerList {
    results: ITrailerDetails[];
}

export interface IActorInformation {
    name: string;
    biography: string;
    profile_path: string;
}

export interface IMovie {
    backdrop_path: string;
    title: string;
    overview: string;
}