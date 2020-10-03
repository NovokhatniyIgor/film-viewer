import { Carousel } from 'antd';
import { MovieListStyled } from 'modules/HomePage/styles';
import styled from '@emotion/styled';

export const StyledSlide = styled.div<{ imageUrl: string }>(({ imageUrl }) => ({
    width: '100%',
    height: '100vh',
    display: 'flex !important',
    justifyContent: 'flex-end',
    position: 'relative',
    flexDirection: 'column',
    backgroundImage: `url(${imageUrl})`,
    backgroundOrigin: 'unset',
    backgroundSize: 'cover',
    alignItems: 'center',
}));

export const StyledSlideWrapper = styled.div({
    backgroundColor: '#000',
    opacity: 0.4,
    width: '100%',
    position: 'absolute',
    height: '100vh',
    top: 0,
    left: 0,
    backgroundImage: 'url("https://www.transparenttextures.com/patterns/cross-stripes.png")',
});

export const MovieListSlideStyled = styled(MovieListStyled)({
    margin: 'inherit',
    justifyContent: 'flex-start',
    minHeight: 'auto',
    width: '100%',
});

export const StyledCarousel = styled(Carousel)({
    minHeight: '100vh',
});

export const StyledSliderNoResult = styled.div({
    minHeight: '100vh',
    backgroundImage: 'url("http://placehold.jp/eeeeee/cccccc/1200x600.png?text=No%20Image")',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
});
