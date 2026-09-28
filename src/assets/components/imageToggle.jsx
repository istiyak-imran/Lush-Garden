import { useState } from "react";
import love from '../love.png'
import green from '../greenLove.png'

export default function ImageToggle () {
    const [isFirst, setIsFirst] = useState(true);
    const handleClick = () => {
        setIsFirst ((prev) => !prev);
    };

    return (
        <img src={isFirst ? love : green} 
        alt="toggle image"
        onClick={handleClick}
        style={{ cursor: "pointer", maxWidth: "100%"}}
        />
    )
}