import styled from '@emotion/styled';
import { Image, Card } from 'antd';

const ActorDetailsContainer = styled.div({
    width: '70%',
    margin: '0 auto',
    padding: '40px 20px',
    maxWidth: 800,
});

const ImageBiographyContainer = styled.div({
    display: 'flex',
});

const ProfileImageContainer = styled.div({
    marginRight: 20,
});

const ImageStyled = styled(Image)({
    cursor: 'pointer',
    transition: 'all 0.5s',

    '&:hover': {
        transform: 'scale(1.05)',
    },
});

const MoviesListContainerStyled = styled.div({
    marginTop: 20,
});

const CardStyled = styled(Card)({
    width: '100%',
});

export {
    ActorDetailsContainer,
    ImageBiographyContainer,
    ProfileImageContainer,
    ImageStyled,
    MoviesListContainerStyled,
    CardStyled,
};
