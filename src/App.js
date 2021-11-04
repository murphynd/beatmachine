import React, {useState} from "react";
import Instrument from "./Components/Instrument";
import * as Tone from "tone";

function App() {
    const [start, setStart] = useState(false);

    function handleStart(e) {
        e.preventDefault();
        setStart(true);
        Tone.start();
        console.log('The link was clicked.');
    }

    return (
        <React.Fragment>
            {start === false ? <div className="startbutton" onClick={handleStart}> push to
                start </div> : <Instrument/>}

        </React.Fragment>
    );
}

//TODO: make instruments a component that takes a peramater of what type it is.
//TODO:figure out a way to dynamiaclly create a grid that populates with instruments (each instrument has selectors already attached)
//TODO: create loop that actsa as a grid over the rows of instruments.

export default App;