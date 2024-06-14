import "./components.css";
import Link from "next/link";
export default function Navigation() {
  return (
    <nav className="backdrop-blur-3xl bg-white/0">
      <Link href="/">
        <p className="font-[300] -skew-x-12 ml-5 gg-sans">DFMG</p>
      </Link>
      <ul className="mr-5">
        <li>
          <Link href="/user">User</Link>
        </li>{" "}
        <li>
          {" "}
          <Link href="/message">Message</Link>
        </li>{" "}
      </ul>
    </nav>
  );
}
