import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Demo1 from './demos/Demo1.js';
import Demo2 from './demos/Demo2.js';
import Demo3 from './demos/Demo3.js';
import Demo4 from './demos/Demo4.js';
import Demo5 from './demos/Demo5.js';
import Demo6 from './demos/Demo6.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <>
//         {/* <Demo1 callback={() => console.log("Rendered or Updated")} /> */}
//         {/* <Demo2 /> */}
//         {/* <Demo3 /> */}
//         {/* <Demo4 /> */}
//         {/* <Demo5 /> */}
//         <Demo6 />
//     </>
// );

root.render(
    <React.StrictMode>
        <Demo6 />
    </React.StrictMode>
);
