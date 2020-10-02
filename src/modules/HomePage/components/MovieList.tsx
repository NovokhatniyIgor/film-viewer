import * as React from 'react';
import { getTrendMovies, searchMovies } from 'api/movies';
import { MovieItem } from './MovieItem';
import { MovieListStyled, ButtonStyled, MovieListHeadingStyled } from '../styles';
import { motion } from 'framer-motion';
import { IMovieListDetails } from 'src/types';
import { formatDescription } from 'services/formatDescription';

const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            when: 'beforeChildren',
            duration: 1,
            staggerChildren: 0.1,
        },
    },
};

const item = {
    hidden: { y: 80, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
    },
};

const INITIAL_STATE = {
    page: 1,
    results: [],
};

interface IRenderMovieList {
    movies: IMovieListDetails;
}

const RenderMovieList: React.FC<IRenderMovieList> = ({ movies }): any => {
    if (!movies.results.length) {
        return <p>There are no items to display</p>;
    }
    return movies.results.map((movie) => {
        const { id, backdrop_path, original_title, overview } = movie;
        return (
            <motion.li variants={item} key={id}>
                <MovieItem
                    id={id}
                    posterImg={backdrop_path}
                    title={original_title}
                    description={formatDescription(overview)}
                />
            </motion.li>
        );
    });
};

interface IMovieList {
    searchParam: string;
}

const MovieList: React.FC<IMovieList> = ({ searchParam }) => {
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
        <>
            <MovieListHeadingStyled>{searchParam ? `"${searchParam}" ` : 'Trend '}movies</MovieListHeadingStyled>
            <MovieListStyled variants={container} initial="hidden" animate="visible">
                <RenderMovieList movies={movies} />
            </MovieListStyled>

            <ButtonStyled
                onClick={handleLoadMoreBtnClick}
                disabled={!movies?.results?.length || movies.page === movies?.total_pages}
                type="primary"
            >
                Load More
            </ButtonStyled>
        </>
    );
};

export { MovieList };
