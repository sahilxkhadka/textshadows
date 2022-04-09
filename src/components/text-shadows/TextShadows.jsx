import React, { useState } from "react";
import "./textshadows.css";
import shadows from "../../data";

const BoxShadows = () => {
    const [overlay, setOverlay] = useState(false);
    const DisplayOverlay = () => {
        return (
            <>
                <div className="app__overlay">Copied!!!👍</div>
            </>
        );
    };
    const handleClick = (shadow) => {
        navigator.clipboard.writeText(`text-shadow: ${shadow};`);
        setOverlay(true);
        setTimeout(() => {
            setOverlay(false);
        }, 2500);
    };
    return (
        <>
            <header>
                <h1 className="app__heading">Css Text Shadows</h1>
            </header>

            <div className="app__wrapper">
                {shadows.map((item, index) => (
                    <div
                        key={index + 1}
                        className="box__container"
                    >
                        <div></div>
                        <div 
                            className="box-shadow_no"
                            style= {{ textShadow: item }}
                        >
                            Text Shadow #{index + 1}
                        </div>
                        <button className="glow-on-hover" onClick={() => handleClick(item)}>
                            Copy Css
                        </button>
                    </div>
                ))}
            </div>
            {overlay && <DisplayOverlay />}
        </>
    );
};

export default BoxShadows;
