import React from 'react';
import { motion } from 'framer-motion'


const Backdrop = ({ children , set }) => {
    // console.log('backdrop');

  return (
    <motion.div className='backdrop absolute top-0 left-0 h-screen w-screen flex justify-center items-center '
        // onClick={()=>set(false)}
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
    >
        {children}
    </motion.div>
  )
}

export default Backdrop;