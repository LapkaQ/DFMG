"use client";
import { NextUIProvider } from "@nextui-org/react";

export default function Providers({ children }) {
  return <NextUIProvider className="grow flex">{children}</NextUIProvider>;
}
