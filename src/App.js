import React, { useState } from 'react'
import { motion , AnimatePresence } from 'framer-motion'
import Modal from './components/modal/index'


// demo available at : [ https://react-framer-demo.netlify.app ]

// AnimatePresence  coz modal exit ho he nhi raha it is removed...to avoid its removal before finishing its animation 
//- just put that element in this element as children


const App = () => {
  
  const [ showModal , setShowModal ] = useState(false);
  const [ myAnimation , setMyAnimation ] = useState('');

  return (
    <div className='p-3 md:p-16 flex flex-col justify-start items-center gap-4 md:gap-9 '>

      <motion.div className='flex justify-between items-center text-2xl md:text-4xl gap-3 md:gap-5'>
        <span className='text-purple-400 '>Framer Motion</span>
        <motion.span drag whileHover={{scale:1.3, rotate:90}} > ⚛️</motion.span>
        <span className='text-sky-500'>React</span>
      </motion.div>
      
      <motion.div className='flex flex-col gap-3  text-2xl '>
        <div className='text-gray-400 text-2xl md:text-3xl text-center '>Animated Modals</div>
        <motion.select className='bg-transparent  border border-orange-400 rounded-md text-orange-400 p-1'
          onChange={(e)=>setMyAnimation(e.target.value)}
          whileFocus={{ scale: 1.1 }}


        >
          <option className='bg-transparent text-left ' value='dropIn'>Drop-In</option>
          <option className='bg-transparent text-left' value='suspension' >Poor Suspension</option>
          <option className='bg-transparent text-left' value='inertia' >Inertia</option>
          <option className='bg-transparent text-left' value='keyframes' >keyframes</option>
          <option className='bg-transparent text-left' value='tween' >Tween</option>
        </motion.select>

        <motion.button
          onClick={()=>{
            setShowModal(true);
            // console.log(myAnimation);
          }
          }
          whileHover={{scale:'1.1'}}
          whileTap={{scale:'0.9'}}

          // transition={{
          //   duration:6 ,
          //   ease:easeIn
          // }}

          className='bg-orange-400  rounded-md  p-1'
        >
          Launch Modal
        </motion.button>
        <AnimatePresence
          initial={false} // disable intial animataion 

          // exitBeforeEnter={true} // the exiting component will finish its exit
          mode='wait'
          onExitComplete={()=>null}
        >
          { showModal && <Modal set={setShowModal} animationType={myAnimation} />} 
        </AnimatePresence>
      
      {/* // AnimatePresence  coz modal exit ho he nhi raha it is removed...to avoid its removal before finishing its animation 
      //- just put that element in this element as children */}
      
      </motion.div>
    </div>
  )
}

export default App;