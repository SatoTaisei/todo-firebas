import Head from 'next/head';

import { useFirebase } from '@/hooks/useFirebase';

export default function Home() {
    const { todoList, addNewTodo } = useFirebase('todoList');

    const loading = !todoList && true;

    const addTodo = (title: string) => {
        addNewTodo({
            title: title,
            isDone: false,
        });
    };

    return (
        <div>
            <Head>
                <title>Todo</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="h-screen  flex justify-center items-center flex-col">
                <h1 className="text-3xl font-bold">Hello Todo!</h1>
                <button
                    className="text-xl font-bold border rounded-xl w-32"
                    onClick={() => {
                        // TODO: Todoの入力をする。
                        addTodo('dummy2');
                    }}
                >
                    ボタン
                </button>
                {loading ? (
                    <p>loading...</p>
                ) : (
                    <ul>
                        {todoList &&
                            Object.entries(todoList).map(([, value], index) => {
                                return <li key={index}>{value.title}</li>;
                            })}
                    </ul>
                )}
            </main>
        </div>
    );
}
