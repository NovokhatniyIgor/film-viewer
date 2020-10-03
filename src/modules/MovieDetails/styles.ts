import styled from '@emotion/styled';

export const MovieDetailsContainerStyled = styled.div({
    width: '70%',
    margin: '0 auto',
    zIndex: 1,
});

export const ImageTextureStyled = styled.div`
    backgroundColor: #000;
    width: 100%;
    position: absolute;
    height: 100vh;
    top: 0;
    left: 0;
    background-image: linear-gradient(0deg, #000, transparent);
`;

export const StyledMovieDetails = styled.div`
    z-index: 1;
    max-width: 40%;
`;

export const StyledMovieDetailsTitle = styled.h1`
    font-size: 24px;
    line-height: 1.3;
    margin: 0;
`;

export const ImageContainerStyled = styled.div<{ imageUrl: string }>(({ imageUrl }) => ({
    width: '100%',
    height: '100vh',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    backgroundImage: `url(${imageUrl})`,
    backgroundOrigin: 'unset',
    backgroundSize: 'cover',
}));

export const GenresContainerStyled = styled.div({
    display: 'flex',
    alignItems: 'baseline',
});

export const GenreStyled = styled.span({
    fontSize: 16,
    marginLeft: 10,
});
