import Image from 'next/image';
import { useState } from 'react';

export const ToggleModeButton = () => {
    const [isDarkMode, setIsDarkMode] = useState(true);

    return (
        <button
            type="button"
            className="text-neutral-300 rounded-md hover:bg-neutral-700 p-2 mr-6"
            onClick={() => setIsDarkMode(!isDarkMode)}
        >
            {isDarkMode ? (
                <Image
                    src="/assets/images/DarkModeIcon.svg"
                    alt=""
                    width={20}
                    height={20}
                />
            ) : (
                <Image
                    src="/assets/images/LightModeIcon.svg"
                    alt=""
                    width={20}
                    height={20}
                />
            )}
        </button>
    );
};
