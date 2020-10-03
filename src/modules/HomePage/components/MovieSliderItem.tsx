import * as React from 'react';
import { useHistory } from 'react-router-dom';
import {
    ButtonStyled,
    MovieSliderItemStyled,
    MovieSliderItemStyledContainer,
    StyledDescription,
    StyledImage,
    StyledTitle,
} from '../styles';
import { checkImage } from 'services/checkImage';
import { getGenres, prettifyDate } from 'src/helpers';

interface IMovieItem {
    id: number;
    posterImg: string;
    title: string;
    description: string;
    release_date: string;
    genreIds: number[];
}

const MovieSliderItem: React.FC<IMovieItem> = ({ id, posterImg, title, genreIds, release_date }) => {
    const history = useHistory();

    const handleCardClick = () => {
        history.push(`/movie/${id}`);
    };

    return (
        <MovieSliderItemStyled>
            <StyledTitle>{title}</StyledTitle>
            <MovieSliderItemStyledContainer>
                <StyledDescription>{prettifyDate(release_date)}</StyledDescription>
                <StyledDescription>{getGenres(genreIds)}</StyledDescription>
                <StyledImage alt="movie poster" src={checkImage(200, 150, posterImg)} />
                <ButtonStyled onClick={handleCardClick} shape="round" size="large" ghost>
                    More info
                </ButtonStyled>
            </MovieSliderItemStyledContainer>
        </MovieSliderItemStyled>
    );
};

export { MovieSliderItem };
