import { useState, useCallback } from 'react';
import Footer from '../ReactMemo/Footer/Footer';
import Header from './Header.js';

function UseCallbackMain() {
    const [number, setNumber] = useState(0);
    const [text, setText] = useState("");

    const increment = useCallback(() => (setNumber((prevState) => prevState + 1)), []);

    return (
        <div className={"makeCenter"}>
            <Header increment={increment} />
            <h1 className={"h1"}>{number}</h1>
            <input value={text} onChange={({ target }) => setText(target.value)} />
            <br /><br />
            <Footer />
        </div>
    )
}

export default UseCallbackMain;