import { Dispatch, FC, SetStateAction } from 'react';

type Props = {
    inputTodo: string;
    setInputTodo: Dispatch<SetStateAction<string>>;
    addTodo: (title: string) => void;
};

export const AddButton: FC<Props> = ({ inputTodo, setInputTodo, addTodo }) => {
    return (
        <button
            type="button"
            className="flex justify-center items-baseline w-11 bg-yellow-500 dark:hover:bg-yellow-400 dark:text-neutral-900 rounded-md text-4xl leading-none ml-4"
            onClick={() => {
                if (inputTodo === '') return;
                addTodo(inputTodo);
                setInputTodo('');
            }}
        >
            {'\u002B'} {/* 追加ボタン */}
        </button>
    );
};
