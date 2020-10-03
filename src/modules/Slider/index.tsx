import React from 'react';
import {StyledSlide, StyledSlideWrapper, MovieListSlideStyled, StyledCarousel, StyledSliderNoResult} from './styles';
import {IMovieInformation, IMovieListDetails} from '../../types';
import { formatDescription } from 'services/formatDescription';
import { MovieSliderItem } from 'modules/HomePage/components/MovieSliderItem';
import {container} from "modules/HomePage/components/MovieList";

function getMoviesForSlider(results: IMovieInformation[]) {
    if(results.length < 3) {
        return results;
    }
    return results.slice(0, 3);
}

interface ISlider {
    movies: IMovieListDetails;
}

const Slider: React.FC<ISlider> = ({ movies }) => {
    if (!movies.results.length) {
        return <StyledSliderNoResult />
    }
    return (
        <StyledCarousel dotPosition="right" effect="fade">
            {getMoviesForSlider(movies.results).map((movie) => {
                const { id, poster_path, original_title, overview, backdrop_path, genre_ids, release_date } = movie;
                return (
                    <StyledSlide imageUrl={`https://image.tmdb.org/t/p/original${backdrop_path}`}>
                        <StyledSlideWrapper />
                        <MovieListSlideStyled variants={container} initial="hidden" animate="visible">
                            <MovieSliderItem
                                id={id}
                                release_date={release_date}
                                genreIds={genre_ids}
                                posterImg={poster_path}
                                title={original_title}
                                description={formatDescription(overview)}
                            />
                        </MovieListSlideStyled>
                    </StyledSlide>
                );
            })}
        </StyledCarousel>
    );
};

export { Slider };
