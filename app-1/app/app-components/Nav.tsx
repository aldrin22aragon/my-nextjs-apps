"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

export const Nav = () => {
  const route = usePathname();
  console.log(route);
  const returnActiveIfMatched = (path: string): string => {
    if (path == route) {
      return "text-blue-600 font-bold";
    } else {
      return "text-gray-400 hover:text-gray-500";
    }
  };
  return (
    <nav className="relative px-4 py-4 flex justify-between items-center bg-white">
      <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:items-center lg:w-auto lg:space-x-6">
        <li>
          <Link className={`text-sm ${returnActiveIfMatched("/")}`} href="/">
            Home
          </Link>
        </li>
        <li>
          <Link className={`text-sm ${returnActiveIfMatched('/todo-list')}`} href="/todo-list">
            Todo list
          </Link>
        </li>
      </ul>
    </nav>
  );
};
