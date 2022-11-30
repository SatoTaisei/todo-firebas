import Image from 'next/image';

import { useDarkMode } from '@/hooks/useDarkMode';

export const ToggleModeButton = () => {
    const { isDarkMode, toggle } = useDarkMode();

    return (
        <button
            type="button"
            className="text-neutral-300 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-700 p-2 mr-6"
            onClick={() => toggle(isDarkMode)}
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
