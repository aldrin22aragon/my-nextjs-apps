import { api } from "./variables";

export type ITodo = {
    id: string;
    pending: string;
    title: string;
    description: string
}

export const todoParse = (data: FormData) => {
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
    return await s.json() as ITodo[]
}

export const getTodo = async (id: string, next: NextFetchRequestConfig = { revalidate: 0 }): Promise<ITodo> => {
    const s = await fetch(api(`todo/${id}`), {
        method: "get",
        next
    });
    return await s.json() as ITodo
}

export const updateTodo = async (todo: ITodo) => {
    const str: string = JSON.stringify(todo)
    console.log(str)
    const s = await fetch(api(`todo/${todo.id}`), {
        method: "PUT", headers: {
            "Content-Type": "application/json"
        }, body: str
    })
    return await s.json() as ITodo
}