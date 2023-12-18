import { ITodo } from "./models/models";

export default async function Home() {
  const s = await fetch("http://localhost:3004/todo", {
    method: "get",
    next: { revalidate: 0 },
  });
  const j = (await s.json()) as ITodo[];
  return <div>Total todo : {j.length}</div>;
}
