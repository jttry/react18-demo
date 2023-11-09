/**
 * @file Automatic Batching（自动批处理更新）
 * @author jiangting01@baidu.com
 */

import {useState} from 'react';
import {flushSync} from 'react-dom';

function App() {

    const [count, setCount] = useState(0);
    const [flag, setFlag] = useState(false);

    const handleClick1 = () => {
        setCount(c => c + 1);
        setFlag(true);
    };

    const handleClick2 = () => {
        setTimeout(() => {
            setCount(c => c + 1);
        }, 1000);
        setTimeout(() => {
            setFlag(true);
        }, 1000);
    };

    const handleClick3 = () => {
        flushSync(() => {
            setCount(c => c + 1);
        });
        flushSync(() => {
            setFlag(true);
        });
    };

    console.log('render');

    return (
        <div>
            <h1>Hello World</h1>
            <button onClick={handleClick1}>按钮1</button>
            <button onClick={handleClick2}>按钮2</button>
            <button onClick={handleClick3}>按钮3</button>
        </div>
    );
}

export default App;
