import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';

export const ToggleModeButton = () => {
    const [isDarkMode, toggleTheme] = useState<boolean>(true);
    const toggle = useCallback((isDark?: boolean) => {
        if (typeof isDark === 'undefined') {
            toggleTheme((state) => !state);
            return;
        }

        toggleTheme(isDark);
    }, []);

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDarkMode]);

    return (
        <button
            type="button"
            className="text-neutral-300 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-700 p-2 mr-6"
            // onClick={() => setIsDarkMode(!isDarkMode)}
            onClick={() => toggle()}
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
