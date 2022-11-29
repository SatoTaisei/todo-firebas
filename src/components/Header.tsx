import Image from 'next/image';
import { useState } from 'react';

export const Header = () => {
    // TODO: 初期値は各ユーザーの設定を読み込む
    const [isDarkMode, setIsDarkMode] = useState(true);

    return (
        <header className="absolute flex items-center justify-between top-0 border-b-2 border-neutral-800 w-full py-5 pl-6 box-border">
            <span className="text-2xl text-yellow-500 font-bold leading-none">
                TODO
            </span>
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
        </header>
    );
};
