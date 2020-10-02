import styled from '@emotion/styled';

export const MovieDetailsContainerStyled = styled.div({
    width: '70%',
    margin: '0 auto',
});

export const ImageContainerStyled = styled.div<{ imageUrl: string }>(({ imageUrl }) => ({
    width: '100%',
    height: 400,
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
