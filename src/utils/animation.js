const animationObj = {
    dropIn: {
        hidden: { opacity: 0, y: '-100vh' },
        visible: {
            opacity: 1,
            y: '0',
            transition: { duration: 0.5, type: 'spring', damping: 80, stiffness: 500 },
        },
        exit: { opacity: 0, y: '100vh' },
    },
    inertia: {
        hidden: { opacity: 0, y: '-100vh' },
        visible: {
            opacity: 1,
            y: '0',
            transition:{ type: "inertia", velocity: 50, power: 0.2, timeConstant: 400, restDelta: 0.3 }
        },
        exit: { opacity: 0, y: '100vh' },
    },
    suspension: {
        hidden: { opacity: 0, y: '-100vh' },
        visible: {
            opacity: 1,
            y: '0',
            transition: { duration: 0.4, type: 'spring', damping: 16, stiffness: 500 },
        },
        exit: { opacity: 0, y: '100vh' },
    },
    keyframes: {
        hidden: { opacity: 0, y: '-100vh' },
        visible: {
            opacity: 1,
            y: '0',
            transition:{ duration: 2, ease: [0.43, 0.13, 0.23, 0.96], times: [0, 0.5, 1]}
        },
        exit: { opacity: 0, y: '100vh' },
    },
    tween: {
        hidden: { opacity: 0, y: '-100vh' },
        visible: {
            opacity: 1,
            y: '0',
            transition:{ type: "tween",ease: "easeOut",duration: 1,}        
            },
        exit: { opacity: 0, y: '100vh' },
    },
    // Add more animations as needed
// Spring: Best for natural, physics-based movements.
// Tween: Ideal for simple, time-based animations with specific easing.
// Inertia: Great for creating a sense of momentum and deceleration, often used in drag interactions.
// Keyframes: Useful when you need to create complex, multi-stage animations.
// Just: When you need to switch styles without animation.
};

export default animationObj;

export const container ={
    hidden:{
        opacity:1, scale:0
    },
    visible:{
        opacity:1, scale:1,
        transition:{
            delayChildren:2,
            staggerChildren:1,
        }
    }
}

export const item={
    hidden:{
        y:20, opacity:0
    },
    visible:{
        y:0,opacity:1,
    }
}