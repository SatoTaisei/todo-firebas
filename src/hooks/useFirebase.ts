import {
    getDatabase,
    ref,
    onValue,
    push,
    update,
    remove,
} from 'firebase/database';
import { useEffect, useState } from 'react';

import { firebaseApp } from '@/services/firebase';
import { Todo, TodoList } from '@/types/Todo';

export const useFirebase = (path: string) => {
    const [todoList, setTodoList] = useState<TodoList>();

    useEffect(() => {
        const database = getDatabase(firebaseApp);
        onValue(ref(database, path), (snapshot) => {
            const newTodoList = snapshot.val();
            setTodoList(newTodoList);
        });
    }, [path]);

    const addNewTodo = (newTodo: Todo) => {
        const database = getDatabase(firebaseApp);
        push(ref(database, path), newTodo);
    };

    const toggleCheck = (key: string, isDone: boolean) => {
        const database = getDatabase(firebaseApp);
        update(ref(database, path + '/' + key), { isDone: isDone });
    };

    const removeTodo = (key: string) => {
        const database = getDatabase(firebaseApp);
        remove(ref(database, path + '/' + key));
    };

    return { todoList, addNewTodo, toggleCheck, removeTodo };
};
