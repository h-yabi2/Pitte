import * as React from "react";
import { motion } from "framer-motion";
import Link from 'next/link'

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

export const MenuItem = ({ i }: { i: number }) => {
  return (
    <>
        <motion.li
          variants={variants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
            <Link href="#feature">Pitteの特徴</Link>
        </motion.li>
        <motion.li
          variants={variants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
            <Link href="#price">料金</Link>
        </motion.li>        
        <motion.li
          variants={variants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
            <Link href="#about">こんな方におすすめ</Link>
        </motion.li>
        <motion.li
          variants={variants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
            <Link href="#about">選ばれる4つの理由</Link>
        </motion.li>                
    </>    
  );
};
