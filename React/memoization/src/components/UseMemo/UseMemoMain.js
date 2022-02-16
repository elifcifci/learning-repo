import { useState, useMemo } from 'react'
import Header from '../ReactMemo/Header/Header'
import Footer from '../ReactMemo/Footer/Footer'

function UseMemoMain() {
    const [number, setNumber] = useState(0);
    const [text, setText] = useState("");
    // const data = calcutaleObject();

    useMemo(() => {
        return calcutaleObject()
    }, [])

    return (
        <div className={"makeCenter"}>
            <Header number={number} />
            <h1 className={"h1"}>{number}</h1>
            <button onClick={() => setNumber(number + 1)}>Click</button>
            <br/><br/>
            <input value={text} onChange={({ target }) => setText(target.value)} />

            <Footer />
        </div>
    );
}

//If we do not use useMemo, users will have diffuculty in writing into input because of "calcutaleObject function"

function calcutaleObject() {
    console.log("Calculating...");
    for (let i = 0; i < 1000000000; i++) { }
    console.log("Calculate complated!");
}
export default UseMemoMain;
