"use client";
import "./components.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaGear } from "react-icons/fa6";

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";

export default function Navigation() {
  const pathname = usePathname();
  const isMobile = useMediaQuery({ query: "(max-width: 760px)" });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return !isMobile ? (
    <nav className="backdrop-blur-3xl bg-white/0 ">
      <div className="logoText ">
        <Link href="/">
          <p className="font-[300] -skew-x-12 gg-sans">DCFaker</p>
        </Link>
      </div>
      <ul className="mr-5">
        <li>
          <Link
            href="/user"
            className={`link ${pathname === "/user" ? "linkActive" : ""}`}
          >
            Profile Viewer
          </Link>
        </li>
        <li>
          <Link
            href="/server"
            className={`link ${pathname === "/server" ? "linkActive" : ""}`}
          >
            Server Viewer
          </Link>
        </li>
        <li>
          <Link
            href="/message"
            className={`link ${pathname === "/message" ? "linkActive" : ""}`}
          >
            Message Creator
          </Link>
        </li>
      </ul>
    </nav>
  ) : (
    <nav className="backdrop-blur-3xl bg-white/0 ">
      <div className="logoText ">
        <Link href="/">
          <p className="font-[300] -skew-x-12 gg-sans">DCFaker</p>
        </Link>
      </div>
      <Dropdown className="bg-white/5 backdrop-blur	">
        <DropdownTrigger>
          <Button variant="bordered">
            <FaGear className="text-xl" />
          </Button>
        </DropdownTrigger>
        <DropdownMenu aria-label="Dynamic Actions" variant="light">
          <DropdownItem>
            <Link
              href="/user"
              className={`link ${pathname === "/user" ? "linkActive" : ""}`}
            >
              Profile Viewer
            </Link>
          </DropdownItem>
          <DropdownItem>
            <Link
              href="/server"
              className={`link ${pathname === "/server" ? "linkActive" : ""}`}
            >
              Server Viewer
            </Link>
          </DropdownItem>
          <DropdownItem>
            <Link
              href="/message"
              className={`link ${pathname === "/message" ? "linkActive" : ""}`}
            >
              Message Creator
            </Link>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </nav>
  );
}
