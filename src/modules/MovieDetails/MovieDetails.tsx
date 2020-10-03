import * as React from 'react';
import { Link } from 'react-router-dom';
import { Trailer, ActorList } from 'modules/MovieDetails';
import { getMovieById } from 'api/movies';
import { PageTransition } from 'src/_common/PageTransition';
import { IMovieInformation } from 'src/types';
import { IMovieDetails } from 'modules/MovieDetails/types';
import { checkImage } from 'services/checkImage';
import {
    MovieDetailsContainerStyled,
    ImageContainerStyled,
    GenresContainerStyled,
    GenreStyled,
    ImageTextureStyled,
    StyledMovieDetails, StyledMovieDetailsTitle,
} from './styles';

const MovieDetails: React.FC<IMovieDetails> = ({ match }) => {
    const [movieDetails, setMovieDetails] = React.useState<IMovieInformation | null>();

    React.useEffect(() => {
        getMovieById(match.params.id!).then((response) => {
            setMovieDetails(response);
        });
    }, [match.params.id]);

    return (
        <PageTransition>
            <ImageContainerStyled imageUrl={checkImage(780, 400, movieDetails?.backdrop_path)}>
                <ImageTextureStyled />
                <MovieDetailsContainerStyled>
                    <StyledMovieDetails>
                        <StyledMovieDetailsTitle>{movieDetails?.original_title}</StyledMovieDetailsTitle>
                        <p>{movieDetails?.tagline}</p>
                        <Trailer id={match.params.id!} />
                    </StyledMovieDetails>
                </MovieDetailsContainerStyled>
            </ImageContainerStyled>

            <MovieDetailsContainerStyled>
                <h2>Storyline</h2>
                <p>{movieDetails?.overview}</p>

                <GenresContainerStyled>
                    <h2>Genres: </h2>
                    {movieDetails?.genres.map((el) => (
                        <GenreStyled key={el.id}>{el.name + ', '}</GenreStyled>
                    ))}
                </GenresContainerStyled>

                <ActorList id={match.params.id!} />
                <div>
                    <Link to="/">Home</Link>
                </div>
            </MovieDetailsContainerStyled>
        </PageTransition>
    );
};

export { MovieDetails };
