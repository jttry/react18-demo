/**
 * @file startTransition
 * @author jiangting01@baidu.com
 */

import {useState, useTransition, useDeferredValue}  from 'react';

function App() {
    const [inputValue, seInputValue] = useState('');
    const [list, setList] = useState([]);
    const [isPending, startTransition] = useTransition();

    const filterValue = useDeferredValue(1);

    const handleChange = val => {
        seInputValue(val);
        // setList(new Array(10000).fill(val));
        // 使用了并发特性，开启并发更新
        startTransition(() => {
            setList(new Array(10000).fill(val));
        });
    };

    return (
        <>
            <span> {isPending}</span>
            <input value={inputValue} onChange={e => handleChange(e.target.value)}/>
            {isPending ? <div>loading...</div> : (
                <>
                    {list.map((val, i) => (
                        <div
                            key={i}
                            style={{
                                width: 200,
                                height: 30,
                                padding: '10px 15px',
                                marginBottom: 10,
                                background: 'pink'
                            }}
                        >
                            {i} {val}
                        </div>
                    ))}
                </>
            )}
        </>
    );
}

export default App;
