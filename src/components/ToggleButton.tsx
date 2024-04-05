import { motion } from "framer-motion";
import { useState } from "react";
import { FaSun } from "react-icons/fa";

interface ToggleButtonProps {
    onToggle: (value: boolean) => void;
    value: boolean;
}

const variants = {
    lightMode: { x: 0, backgroundColor: 'white'},
    darkMode: { x: '100%', backgroundColor: '#161925'},
}

function ToggleButton({ onToggle, value }: ToggleButtonProps) {
    const [isDarkMode, setIsDarkMode] = useState(value);

    const handleClick = () => {
        setIsDarkMode(!isDarkMode);
        onToggle(!isDarkMode);
    }

    return (
        <div 
            onClick={handleClick}
            className={`w-full md:w-1/6 lg:min-w-10 h-6 rounded-full p-1 transition-colors duration-300 ease-in-out cursor-pointer ${isDarkMode ? 'bg-white' : 'bg-dark-bg'}`}
        >
            <motion.div 
                animate={isDarkMode ? 'darkMode' : 'lightMode'}
                transition={{ duration: 0.3 }}
                variants={variants}
                className="bg-white w-1/2 h-4 rounded-full flex justify-center items-center"
            >
                <FaSun className="w-2/3 h-2/3"/>
            </motion.div>
        </div>
    );
}

export default ToggleButton;