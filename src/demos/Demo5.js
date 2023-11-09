/**
 * @file startTransition
 * @author jiangting01@baidu.com
 */

import React, {useState, useEffect, startTransition}  from 'react';

function App() {
    const [result, setResult] = useState('');

    useEffect(() => {
        console.log(result, 'result');
    }, [result]);

   const handleChangeResult = () => {
        setResult(item => item + 'A');
        startTransition(() => {setResult(item => item + 'B')});
        setResult(item => item + 'C');
    }

    return <div>
        <h1>结果：{result}</h1>
        <button onClick={handleChangeResult}>改变结果</button>
    </div>
}

export default App;
