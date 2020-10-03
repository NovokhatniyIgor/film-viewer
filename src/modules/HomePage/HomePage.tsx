import * as React from 'react';
import { MovieList } from './components/MovieList';
import { SearchField } from './components/SearchField';
import { PageTransition } from 'src/_common/PageTransition';
import { IMovieListDetails } from '../../types';
import { Slider } from '../Slider';
import { getTrendMovies, searchMovies } from 'api/movies';

const INITIAL_STATE = {
    page: 1,
    results: [],
};

const HomePage = () => {
    const [searchParam, setSearchParam] = React.useState<string>('');
    const [movies, setMovies] = React.useState<IMovieListDetails>(INITIAL_STATE);

    const getMovies = React.useCallback(
        (page) => {
            return searchParam ? searchMovies(page, searchParam) : getTrendMovies(page);
        },
        [searchParam]
    );

    React.useEffect(() => {
        setMovies(INITIAL_STATE);

        getMovies(1).then((response) => {
            setMovies(response);
        });
    }, [searchParam, getMovies]);

    const handleLoadMoreBtnClick = () => {
        getMovies(movies.page + 1).then((response) => {
            setMovies({ ...response, results: [...movies.results, ...response.results] });
        });
    };

    return (
        <PageTransition>
            <Slider movies={movies} />
            <SearchField setSearchParam={setSearchParam} />
            <MovieList searchParam={searchParam} handleLoadMoreBtnClick={handleLoadMoreBtnClick} movies={movies} />
        </PageTransition>
    );
};

export { HomePage };
