"use client";
import "./components.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="backdrop-blur-3xl bg-white/0">
      <Link href="/">
        <p className="font-[300] -skew-x-12 ml-5 gg-sans">DCFaker</p>
      </Link>
      <ul className="mr-5">
        <li>
          <Link
            href="/user"
            className={`link ${pathname === "/user" ? "linkActive" : ""}`}
          >
            Profile Viewer
          </Link>
        </li>{" "}
        <li>
          <Link
            href="/server"
            className={`link ${pathname === "/server" ? "linkActive" : ""}`}
          >
            Server Viewer
          </Link>
        </li>{" "}
        <li>
          {" "}
          <Link
            href="/message"
            className={`link ${pathname === "/message" ? "linkActive" : ""}`}
          >
            Message Creator
          </Link>
        </li>{" "}
      </ul>
    </nav>
  );
}
