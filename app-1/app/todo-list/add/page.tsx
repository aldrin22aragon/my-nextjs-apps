import { addTodo, todoParse } from "@/app/models/ITodo";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import React from "react";

export default function AddTodo() {
    const actionAddTodo = async (data :FormData) =>{
        "use server"
        const a = await addTodo(todoParse(data))   
        revalidatePath("/todo-list")
        redirect("/todo-list");
    }
    return (
        <form action={actionAddTodo}>
            <div>Status</div>
            <select name="pending" defaultValue="true">
                <option value={"true"}>Pending</option>
                <option value={"false"}>Done</option>
            </select>
            <input type="hidden" name="id" defaultValue="" />
            <div>Title</div>
            <input type="text" name="title" defaultValue="" />
            <div>Description</div>
            <input type="text" name="description" defaultValue="" />
            <div></div>
            <input type="submit" value={"Save"} />
        </form>
    );
}
