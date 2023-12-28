import { getTodo } from "@/app/models/ITodo";
import React from "react";
import { TodoItem } from "../page";
import Link from "next/link";

type params = {
    params :{
        id: string
    }
}

export default async function ViewTodo({params} : params) {
    const todo = await getTodo(params.id);

    return <>
        <TodoItem value={todo} />
        <Link href={`/todo-list/${params.id}/edit`}>Edit</Link>
    </>;
}
