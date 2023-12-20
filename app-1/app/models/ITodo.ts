import { publicDecrypt } from "crypto";
import { api } from "./variables";

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

export const getTodoList = async (next: NextFetchRequestConfig = { revalidate: 0 }): Promise<ITodo[]> => {
    const s = await fetch(api('todo'), {
        method: "get",
        next
    });
    return await s.json() as Promise<ITodo[]>
}

export const getTodo = async (id: string, next: NextFetchRequestConfig = { revalidate: 0 }): Promise<ITodo> => {
    const s = await fetch(api(`todo/${id}`), {
        method: "get",
        next
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
        body: str,
        next: {
            revalidate: 0 // important is to revalidate the url api. 
        }
    })
    return await s.json() as Promise<ITodo>
}

export const addTodo = async (todo: ITodo): Promise<ITodo> =>{
    const str: string = JSON.stringify(todo)
    const s = await fetch(api(`todo`), {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: str
    })
    return await s.json() as Promise<ITodo>
}