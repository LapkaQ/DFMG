import Link from "next/link";

export default function Custom404() {
  return (
    <main className="flex flex-col justify-center items-center">
      <h1 className="text-9xl whiteGlow animate-bounce font-[300]">404</h1>
      <h1 className="text-4xl font-[500] whiteGlow">Page Not Found</h1>
      <p className="font-[400] p-2 whiteGlow">
        Sorry, the page you are looking for does not exist. You can go back to
        the{" "}
        <Link href="/" className="animate-pulse">
          homepage
        </Link>
        .
      </p>
    </main>
  );
}
