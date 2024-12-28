import React from 'react';
import { motion } from 'motion/react';

const HandshakeAnimation = () => {
    return (
        <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}  // Simple handshaking effect
            transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
            style={{ fontSize: '2.4em'}}
        >
            👋 
        </motion.div>
    );
};

export default HandshakeAnimation;
