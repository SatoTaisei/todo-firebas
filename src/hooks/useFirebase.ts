import { getDatabase, ref, onValue, push } from 'firebase/database';
import { useEffect, useState } from 'react';

import { firebaseApp } from '@/services/firebase';
import { Todo, TodoList } from '@/types/todo';

export const useFirebase = (path: string) => {
    const [todoList, setTodoList] = useState<TodoList>();

    useEffect(() => {
        const database = getDatabase(firebaseApp);
        const pathRef = ref(database, path);
        onValue(pathRef, (snapshot) => {
            const newTodoList = snapshot.val();
            setTodoList(newTodoList);
        });
    }, [path]);

    const addNewTodo = (newTodo: Todo) => {
        const database = getDatabase(firebaseApp);
        const pathRef = ref(database, path);
        push(pathRef, newTodo);
    };

    return { todoList, addNewTodo };
};
