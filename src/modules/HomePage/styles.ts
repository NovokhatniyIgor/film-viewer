import styled from '@emotion/styled';
import { Card, Button } from 'antd';
import { motion } from 'framer-motion';

export const SearchContainerStyled = styled.div({
    margin: '10px auto',
    maxWidth: 500,
});

export const MovieListHeadingStyled = styled.h1({
    textAlign: 'center',
    margin: '20px 0 0 0',
});

export const MovieListStyled = styled(motion.ul)({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    maxWidth: 1000,
    padding: 20,
    margin: '0 auto',
    minHeight: 600,
});

export const MovieItemStyled = styled.div({
    borderRadius: 5,
    padding: 20,
});

export const CardStyled = styled(Card)({
    width: 240,
    margin: 10,
});

export const ButtonStyled = styled(Button)({
    display: 'block',
    margin: '10px auto',
    overflowAnchor: 'none',
});
