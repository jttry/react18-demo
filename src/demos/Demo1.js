/**
 * @file Render Callback（渲染回调函数）
 * @author jiangting01@baidu.com
 */

import React from 'react';

function App({callback}) {
    return (
        <div ref={callback}>
            <h1>Hello World</h1>
        </div>
    );
}

export default App;
