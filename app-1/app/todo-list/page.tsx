import Link from "next/link";
import { getTodoList } from "../models/ITodo";

export default async function Todo() {
  const j = await getTodoList();
  return (
    <>
      <div className="flex justify-end">
        <button>Add +</button>
      </div>
      {j.map((value) => (
        <Link
          href={`/todo-list/${value.id}`}
          className="block bg-slate-200 mb-2"
          key={value.id}
        >
          <div className="bg-slate-300 p-2 flex justify-between">
            <div>{value.title}</div>
            <div className="flex gap-2">
              {value.pending == "false" ? (
                <button className=" btn bg-green-200">Done</button>
              ) : (
                <button className="btn bg-red-200">Pending</button>
              )}
            </div>
          </div>
          {/* <div>{JSON.stringify(value)}</div> */}
          <div className="p-2">{value.description}</div>
        </Link>
      ))}
    </>
  );
}
