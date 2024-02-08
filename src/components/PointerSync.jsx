import React, { useEffect, useRef } from 'react';
import { motion } from "framer-motion"

function PointerSync({ref2}) {

  const ref = useRef(null);

  const syncPointer = (event) => {
    const pointerX = event.clientX;
    const pointerY = event.clientY;

    const x = pointerX.toFixed(2);
    const y = pointerY.toFixed(2);
    const xp = (pointerX / window.innerWidth).toFixed(2);
    const yp = (pointerY / window.innerHeight).toFixed(2);

    document.documentElement.style.setProperty('--x', x);
    document.documentElement.style.setProperty('--xp', xp);
    document.documentElement.style.setProperty('--y', y);
    document.documentElement.style.setProperty('--yp', yp);
  };

  useEffect(() => {
    document.body.addEventListener('pointermove', syncPointer);
    return () => {
      document.body.removeEventListener('pointermove', syncPointer);
    };
  }, []);


  return (
    <div ref2 = {ref} className="container-z">
        <motion.div drag dragConstraints={ref2} whileDrag={{scale: 1.1}} className='add-btn'>
            <span>+Add</span>
        </motion.div>
    </div>
    
  );
};

export default PointerSync;
