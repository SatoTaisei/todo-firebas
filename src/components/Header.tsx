import { ToggleModeButton } from '@/components/Button/ToggleModeButton';

export const Header = () => {
    return (
        <header className="absolute flex items-center justify-between top-0 border-b-2 border-neutral-800 w-full py-5 pl-6 box-border">
            <span className="text-2xl text-yellow-500 font-bold leading-none">
                TODO
            </span>
            <ToggleModeButton />
        </header>
    );
};
