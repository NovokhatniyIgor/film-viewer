import * as React from 'react';
import { Link } from 'react-router-dom';
import { Trailer } from './components/Trailer';
import { ActorList } from './components/ActorList';
import { getMovieById } from 'api/movies';
import { PageTransition } from 'src/_common/PageTransition';
import { IMovieInformation } from 'src/types';
import {IMovieDetails} from "modules/MovieDetails/types";
import {checkImage} from "services/checkImage";
import { MovieDetailsContainerStyled, ImageContainerStyled, GenresContainerStyled, GenreStyled } from './styles';

const MovieDetails: React.FC<IMovieDetails> = ({ match }) => {
    const [movieDetails, setMovieDetails] = React.useState<IMovieInformation | null>();

    React.useEffect(() => {
        getMovieById(match.params.id!).then((response) => {
            setMovieDetails(response);
        });
    }, [match.params.id]);

    return (
        <PageTransition>
            <MovieDetailsContainerStyled>
                <ImageContainerStyled imageUrl={checkImage(780, 400, movieDetails?.backdrop_path)} />

                <h1>Storyline</h1>
                <p>{movieDetails?.overview}</p>

                <GenresContainerStyled>
                    <h2>Genres: </h2>
                    {movieDetails?.genres.map((el) => (
                        <GenreStyled key={el.id}>{el.name + ', '}</GenreStyled>
                    ))}
                </GenresContainerStyled>

                <ActorList id={match.params.id!} />
                <Trailer id={match.params.id!} />

                <div>
                    <Link to="/">Home</Link>
                </div>
            </MovieDetailsContainerStyled>
        </PageTransition>
    );
};

export { MovieDetails };
