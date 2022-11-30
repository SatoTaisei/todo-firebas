import { ChangeEvent, Dispatch, FC, SetStateAction } from 'react';

type Props = {
    inputTodo: string;
    setInputTodo: Dispatch<SetStateAction<string>>;
    addTodo: (title: string) => void;
};

export const TodoInput: FC<Props> = ({ inputTodo, setInputTodo, addTodo }) => {
    return (
        <input
            type="text"
            placeholder="TODOを入力"
            className="w-full rounded-md border-2 bg-white dark:bg-neutral-800 border-neutral-900 dark:border-neutral-500 focus:border-yellow-500 outline-none placeholder-neutral-500 p-2"
            value={inputTodo}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setInputTodo(e.target.value);
            }}
            onKeyDown={(e) => {
                if (e.key === 'Enter' && inputTodo !== '') {
                    addTodo(inputTodo);
                    setInputTodo('');
                }
            }}
        />
    );
};
