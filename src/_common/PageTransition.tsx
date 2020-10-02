import * as React from 'react';
import { motion } from 'framer-motion';

const pageVariants = {
    in: {
        opacity: 1,
    },
    out: {
        opacity: 0,
    },
};

export const PageTransition: React.FC = ({ children }) => {
    return (
        <motion.div initial="out" animate="in" exit="out" variants={pageVariants}>
            {children}
        </motion.div>
    );
};
