import { useEffect, useState, useRef } from 'react';

interface TypingAnimationProps {
  text: string; // Assume the content is just text for simplicity
  className?: string; // Optional class name for styling
  delay?: number; // Initial delay before typing starts
  speed?: number; // Speed of typing, in milliseconds per character
}

const TypingAnimation = ({ text, className = "", delay = 0, speed = 50 }: TypingAnimationProps) => {
    const [visibleText, setVisibleText] = useState('');
    const indexRef = useRef(0); // Add this line

    useEffect(() => {
        const handleTyping = () => {
            if (indexRef.current < text.length) {
                setVisibleText((prev) => text.substring(0, prev.length + 1));
                indexRef.current += 1; // Increment the current index
            }
        };

        // Start typing after the initial delay
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        let interval: any;
        const timeout = setTimeout(() => {
            interval = setInterval(handleTyping, speed);
        }, delay);

        return () => {
            clearTimeout(timeout);
            clearInterval(interval);
        };
    }, [text, delay, speed]); // Remove visibleText from dependencies

    return <span className={className}>{visibleText}</span>;
};

export default TypingAnimation;