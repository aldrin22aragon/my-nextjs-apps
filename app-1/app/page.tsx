import Link from "next/link";
import { getTodoList } from "./models/ITodo";

export default async function Home() {
  const j = await getTodoList();
  return (
    <div className="bg-slate-200">
      <div className="text-center text-lg bg-slate-300">
        Todo Lists: {j.length}
      </div>
      <div className="p-4">
        {j.map((value) => (
          <div key={value.id}>{value.description}</div>
        ))}
        <div className="flex justify-end">
          <Link className="bg-slate-300 p-1" href={"/todo-list"}>
            Open todo list page
          </Link>
        </div>
      </div>
    </div>
  );
}
