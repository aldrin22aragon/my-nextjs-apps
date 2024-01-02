import { api } from "./variables";
import { string, z } from "zod";

export type ITodo = {
    id: string;
    pending: string;
    title: string;
    description: string
}


export const todoParse = (data: FormData): ITodo => {
    return {
        id: data.getAll("id").toString(),
        description: data.getAll("description").toString(),
        pending: data.getAll("pending").toString(),
        title: data.getAll("title").toString()
    } as ITodo
}

export const getTodoList = async (): Promise<ITodo[]> => {
    const s = await fetch(api('todo'), {
        method: "get",
        next: {
            revalidate: 0
        }
    });
    return await s.json() as Promise<ITodo[]>
}

export const getTodo = async (id: string): Promise<ITodo> => {
    const s = await fetch(api(`todo/${id}`), {
        method: "get",
        cache: "no-store"
    });
    return await s.json() as Promise<ITodo>
}

export const updateTodo = async (todo: ITodo): Promise<ITodo> => {
    const str: string = JSON.stringify(todo)
    const s = await fetch(api(`todo/${todo.id}`), {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        cache: "no-store",
        body: str
    })
    return await s.json() as Promise<ITodo>
}

export const addTodo = async (todo: ITodo): Promise<ITodo> => {
    const str: string = JSON.stringify(todo)
    const s = await fetch(api(`todo`), {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        cache: "no-store",
        body: str
    })
    return await s.json() as Promise<ITodo>
}

export const deleteTodo = async (id: string): Promise<Response> => {
    return await fetch(api(`todo/${id}`), {
        method: "DELETE",
        cache: "no-store"
    })    
}