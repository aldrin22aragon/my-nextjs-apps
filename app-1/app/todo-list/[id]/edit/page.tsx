import { deleteTodo, getTodo, todoParse, updateTodo } from "@/app/models/ITodo";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

type par = {
    params: {
        id: string;
    };
};

export default async function Page({ params }: par) {
    const todo = await getTodo(params.id);
    const saveTodo = async (data: FormData) => {
        "use server";
        const res = await updateTodo(todoParse(data));
        redirect("/todo-list");
    };
    const deleteAction = async (data: FormData) => {
        "use server";
        const r = await deleteTodo(params.id)
        redirect('/todo-list')
    };
    return (
        <form action={saveTodo}>
            <div>Status</div>
            <select name="pending" defaultValue={todo.pending}>
                <option value={"true"}>Pending</option>
                <option value={"false"}>Done</option>
            </select>
            <input type="hidden" name="id" defaultValue={todo.id} />
            <div>Title</div>
            <input type="text" name="title" defaultValue={todo.title} />
            <div>Description</div>
            <input
                type="text"
                name="description"
                defaultValue={todo.description}
            />
            <div></div>
            <div className="flex justify-between">
                <input type="submit" value={"Save"} />
                <button formAction={deleteAction}>Delete</button>
            </div>
        </form>
    );
}
