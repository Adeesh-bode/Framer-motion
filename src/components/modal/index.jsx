import React from 'react';
import Backdrop from '../backdrop/index'
import { motion } from 'framer-motion';
import animationObj from '../../utils/animation';

import { container, item } from '../../utils/animation'  ////// nhi hua apply...kahi aur try karna...


const Modal = ({set, animationType }) => {
    
    const type = animationObj[animationType] || animationObj.dropIn

  return (
    <Backdrop set={set}>
        <motion.div
            drag
            dragConstraints={{
                top: -250,
                left: -350,
                right: 350,
                bottom: 250,
            }}
            dragElastic={0.1}
            dragTransition={{ damping: 60, stiffness: 1000 }} 
            // dragSnapToOrigin // on release back to origin
            onClick={(e)=>e.stopPropagation()} // adding exception here as functionally of outside click or modal close button only to remove modal
            // variants={animationType}
            variants={type}
            className='modal'
            initial='hidden'
            animate='visible'
            exit='exit'
        >
        <motion.div 
            variants={container}
            initial='hidden'
            animate='visible'
            className='w-full h-full p-3 rounded-md bg-zinc-900 text-white flex flex-col justify-center items-center gap-3 md:gap-5'
        >

        <motion.div className='text-2xl text-orange-400'
            variants={item}
            initial='hidden'
            animate='visible'
        > Animations</motion.div>
        <motion.p className='text-center font-serif text-base'
            variants={item}
            initial='hidden'
            animate='visible'
        >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et facere amet impedit fugit, amet consectetur adipi temporibus nobis numquam exercitationem officiis eveniet expedita officia dolores quibusdam. Alias laborum, unde ex doloremque a vel.
        </motion.p>
        <motion.button
        onClick={()=>set(false)}
        whileHover={{scale:'1.1'}}
        whileTap={{scale:'0.9'}}
        variants={item}
            initial='hidden'
            animate='visible'
        className='bg-orange-400 rounded-md text-black  text-xl p-1 px-3'
        >
            Close
        </motion.button>
        </motion.div>
    </motion.div>  
    </Backdrop>
  )
}

export default Modal;