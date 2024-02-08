import React, { useState } from 'react';

const PointerSync = () => {
  const [pointerPosition, setPointerPosition] = useState({ x: 0, y: 0 });

  const handlePointerMove = (event) => {
    const { clientX, clientY } = event;
    const pointerX = clientX.toFixed(2);
    const pointerY = clientY.toFixed(2);
    const xp = (clientX / window.innerWidth).toFixed(2);
    const yp = (clientY / window.innerHeight).toFixed(2);

    setPointerPosition({ x: pointerX, y: pointerY });
  };

  return (
    <div style={{ display: 'none' }}>
      {/* Hidden element to trigger pointer move events */}
      <div style={{ width: '100%', height: '100%' }} onMouseMove={handlePointerMove}></div>
    </div>
  );
};

export default PointerSync;

///////////////////////////   2nd  page..................


// import React from 'react';
// import PointerSync from './PointerSync';

// const App = () => {
//   return (
//     <div className="App">
//       <PointerSync />
//       {/* Other components and content */}
//     </div>
//   );
// };

// export default App;
