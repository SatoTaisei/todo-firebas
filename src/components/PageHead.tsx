import Head from 'next/head';

export const PageHead = () => {
    return (
        <Head>
            <title>Todo List</title>
            <meta charSet="utf-8" />
            <meta
                name="description"
                content="FirebaseのRealtime Databaseを用いたTodoListアプリケーション。"
            />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    );
};
