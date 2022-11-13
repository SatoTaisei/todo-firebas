export type Todo = {
    title: string;
    isDone: boolean;
};

export type TodoList = {
    [key: string]: Todo;
};
