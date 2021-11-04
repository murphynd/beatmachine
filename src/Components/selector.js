import React, {useEffect, useState} from "react";

const Selector = () => {
    const [selector, setselector] = useState(false);
    const [color, setColor] = useState(false);
    const handleClick= () => {
        setselector((prevState) => !prevState)
        console.log(selector)
    }
    return (
        <>
            <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border
            border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent
            focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2" onClick={handleClick} ></button>
        </>
    );
};

export default Selector;
