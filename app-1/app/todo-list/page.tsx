import { ITodo } from "../models/models";

export default async function Todo() {
  const s = await fetch("http://localhost:3004/todo", {
    method: "get",
    next: { revalidate: 0 },
  });
  const j = (await s.json()) as ITodo[];
  return (
    <div>
      {j.map((value) => (
        <div key={value.id}>a</div>
      ))}
    </div>
  );
}
