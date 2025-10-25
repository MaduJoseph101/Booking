import React from 'react';
import { useNavigate } from 'react-router-dom';

function BackButton({to}) {
    const navigate = useNavigate();

    const handleClick = () => to ? navigate(to) : navigate(-1);

    return (
        <button onClick={handleClick} className="fixed top-4 cursor-pointer left-4 z-10 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-lg hover:bg-gray-200 ease-in-out hover:scale-[1.1] transition-colors duration-400" aria-label="Go back">
            
            <svg className="w-6 h-6 text-[#006CE4]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7"></path></svg>
        </button>
    );
}

export default BackButton;