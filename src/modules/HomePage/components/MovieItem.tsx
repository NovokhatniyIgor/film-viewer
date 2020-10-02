import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { CardStyled } from '../styles';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from 'antd';
import { checkImage } from 'services/checkImage';

interface IMovieItem {
    id: number;
    posterImg: string;
    title: string;
    description: string;
}

const MovieItem: React.FC<IMovieItem> = ({ id, posterImg, title, description }) => {
    const history = useHistory();

    const handleCardClick = () => {
        history.push(`/movie/${id}`);
    };

    return (
        <AnimatePresence exitBeforeEnter>
            <motion.div
                key={posterImg}
                exit={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
            >
                <CardStyled
                    hoverable
                    onClick={handleCardClick}
                    cover={<img alt="movie poster" src={checkImage(200, 150, posterImg)} />}
                >
                    <Card.Meta title={title} description={description} />
                </CardStyled>
            </motion.div>
        </AnimatePresence>
    );
};

export { MovieItem };
