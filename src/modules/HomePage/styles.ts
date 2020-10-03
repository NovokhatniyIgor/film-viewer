import styled from '@emotion/styled';
import { Card, Button } from 'antd';
import { motion } from 'framer-motion';
import { Input } from 'antd';

const { Search } = Input;


export const SearchContainerStyled = styled.div({
    margin: '20px auto',
    maxWidth: 500,
});

export const StyledSearch = styled(Search)`
`;

export const MovieListHeadingStyled = styled.h1({
    textAlign: 'center',
    margin: '20px 0 0 0',
});

export const MovieListStyled = styled(motion.ul)({
    display: 'flex',
    flexWrap: 'wrap',
	justifyContent: 'center',
	maxWidth: 1200,
    padding: 20,
    margin: '0 auto',
    minHeight: 600,
});

export const CardStyled = styled(Card)({
    width: 240,
    margin: 10,
});

export const MovieSliderItemStyled = styled.div({
    width: 240,
    zIndex: 1,
    margin: '10px',
});

export const MovieSliderItemStyledContainer = styled.div({
    width: 200,
});

export const StyledTitle = styled.h3({
    color: '#fff',
    fontSize: 22,
    lineHeight: 1.3,
    fontWeight: 700,
    margin: 0,
});

export const StyledDescription = styled.p({
    color: '#fff',
    fontSize: 13,
    fontWeight: 500,
    margin: 0,
});

export const StyledImage = styled.img({
    marginTop: 10,
});

export const ButtonStyled = styled(Button)({
    display: 'block',
    width: '100%',
    marginTop: '10px',
    overflowAnchor: 'none',
});
