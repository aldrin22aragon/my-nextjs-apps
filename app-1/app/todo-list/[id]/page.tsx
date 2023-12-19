import { getTodo, todoParse, updateTodo } from "@/app/models/ITodo";
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
    console.log("Nasa server..");
    const res = await updateTodo(todoParse(data));
    redirect("/todo-list");
    revalidatePath(`/todo-list/${res.id}`);
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
      <input type="text" name="description" defaultValue={todo.description} />
      <div></div>
      <input type="submit" value={"Save"} />
    </form>
  );
}
