import  React, {useEffect, useState} from "react";
import * as Tone from 'tone'
import Selector from "./selector";

const Instrument = () => {
    const [name, setName] = useState("Trumpet");
    const [count, setCount] = useState(0);
    const [sound, setSound] = useState([]);
    const [start, setStart] = useState("START");
    const [windowWidth, setwindowWidth] = useState(window.innerWidth);
    const [visible, setVisible] = useState(false);

    const handleResize = () => {
        setwindowWidth(window.innerWidth)
    }
    useEffect(() => {
        window.addEventListener('resize', handleResize)
    }, [])
    // const handleStartAndStop=()=>{
    //     if (start === "START") {
    //         setStart("STOP");
    //     }
    //         setStart("START")
    // }
    //
    // useEffect(() => {
    //     /*Tone.getDestination().volume.rampTo(-10, 0.001)
    //     const synth = new Tone.MembraneSynth().toDestination();
    //     synth.triggerAttackRelease("C2", "8n");*/
    //     console.log('Hello I am an Effect on Name')
    //     window.addEventListener('click', handleStartAndStop)
    // }, [start])

    useEffect(() => {
        console.log('Hello I am an Effect on Count')
    }, [count])
    useEffect(() => {
        console.log('Hello I am an Effect on Mount because my array is empty')
    }, [])

    useEffect(() => {
        // Update the document title using the browser API
        document.title = `You clicked ${count} times`;
    });

    const increment = () => {
        setCount((prevState) => prevState + 1)
    }

    return (
        <>
            <div> Instrument Name: {name}</div>
            <p>You clicked {count} times</p>
            <div className="text-gray-500">{start}</div>
            <button onClick={() => setName('Kick')}>Kick</button>
            <Selector/>
            <Selector/>
            <Selector/>
            <Selector/>
            <Selector/>
            <button onClick={() => setName('Snare')}>Snare</button>
            <Selector/>
            <Selector/>
            <Selector/>
            <Selector/>
            <Selector/>
            <button onClick={() => setName('Bass')}>Bass</button>
            <Selector/>
            <Selector/>
            <Selector/>
            <Selector/>
            <Selector/>
            <button onClick={() => setName('HiHat')}>HiHat</button>
            <Selector/>
            <Selector/>
            <Selector/>
            <Selector/>
            <Selector/>
            <div className="count">
                number of beats:
                <button className="count" onClick={increment}>+</button>
            </div>
            <div className="windowWidth">{windowWidth}</div>


        </>
    );
};

export default Instrument;