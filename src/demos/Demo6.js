/**
 * @file 新的严格模式行为（useEffect）
 * @author jiangting01@baidu.com
 */

import {useState, useEffect} from 'react';

function App() {
    const [data, setData] = useState(0)

    useEffect(() => {
        console.log('useEffect');
        setData(preData => preData + 1)
    }, [])

    return (
        <div>{data}</div>
    )
}

export default App;
