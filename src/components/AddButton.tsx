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
            className="flex justify-center items-baseline w-10 bg-yellow-500 text-neutral-900 rounded-md text-4xl ml-4"
            onClick={() => {
                if (inputTodo === '') return;
                // TODO: firebase DBに追加
                // addTodo(inputTodo);
                console.log(inputTodo);
                setInputTodo('');
            }}
        >
            {'\u002B'} {/* 追加ボタン */}
        </button>
    );
};