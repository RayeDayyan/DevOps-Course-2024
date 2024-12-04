import { useEffect, useState } from "react";


export default function TypingText ({ text }) {
    const [displayedText, setDisplayedText] = useState('');
    const [index, setIndex] = useState(0); // Manage index in state

    useEffect(() => {
        if (!text) {
            setDisplayedText('');
            setIndex(0); // Reset index if text is empty
            return; // Exit if text is undefined or empty
        }

        const intervalId = setInterval(() => {
            // Check if we have reached the end of the text
            // eslint-disable-next-line react/prop-types
            if (index < text.length) {
                setDisplayedText((prev) => prev + text[index]); // Add the current character
                setIndex((prevIndex) => prevIndex + 1); // Increment index
            } else {
                clearInterval(intervalId); // Stop the interval when done
            }
        }, 100); // Typing speed (in ms)

        return () => clearInterval(intervalId); // Cleanup interval on unmount
    }, [text, index]); // Dependency array includes index to trigger effect when it changes

    return <h1 className="text-7xl font-bold text-[#ffffff] mb-6">{displayedText}</h1>;
};
