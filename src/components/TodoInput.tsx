import { ChangeEvent, Dispatch, FC, SetStateAction } from 'react';

type Props = {
    inputTodo: string;
    setInputTodo: Dispatch<SetStateAction<string>>;
};

export const TodoInput: FC<Props> = ({ inputTodo, setInputTodo }) => {
    return (
        <input
            type="text"
            placeholder="TODOを入力"
            className="rounded-md border-2 border-neutral-500 focus:border-yellow-500 outline-none placeholder-neutral-500 p-2"
            value={inputTodo}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setInputTodo(e.target.value);
            }}
            onKeyDown={(e) => {
                if (e.key === 'Enter' && inputTodo !== '') {
                    // TODO: firebase DBに追加
                    // addTodo('dummy2');
                    console.log(inputTodo);
                    setInputTodo('');
                }
            }}
        />
    );
};
