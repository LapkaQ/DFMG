"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
  Button,
} from "@nextui-org/react";
import Link from "next/link";

export default function Home({ params }) {
  const router = useRouter();
  const [id, setId] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    if (params.id != null) {
      setId(params.id);
    } else {
      console.log("null");
    }
  }, []);
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`/api/user/${id}`);
      if (!response.ok) {
        throw new Error("Failed to fetch user");
      }

      const userData = await response.json();
      setUser(userData);
      setError(null);
    } catch (error) {
      console.error("Error fetching user:", error);
      setError("Podaj prawidłowe id!");
      setUser(null);
    }
  };
  const InputHandler = (e) => {
    setId(e.target.value);
  };
  return (
    <main className="flex justify-center items-center gap-5 flex-col">
      <form
        onSubmit={handleFormSubmit}
        className="formId flex flex-col gap-2 justify-center items-center"
      >
        <Input
          type="text"
          variant="underlined"
          color="secondary"
          label="ID"
          onChange={InputHandler}
          value={id}
          classNames={{
            input: "text-white text-center rounded-xl",
            label: "text-white",
          }}
        />
        <Button color="secondary" type="submit">
          Submit
        </Button>
      </form>
      {user && (
        <div className="flex justify-center items-center flex-row gap-2">
          <Card isFooterBlurred radius="lg" className="border-none ">
            <Link href={user.avatar} target="_blank">
              <Image
                alt={user.username}
                className="object-cover"
                height={200}
                src={user.avatar}
                width={200}
              />
            </Link>
            <CardFooter className="justify-center before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
              <p className="text-tiny font-[700] text-white/80 drop-shadow-2xl nicknameCard gg-sans">
                {user.username}
              </p>
            </CardFooter>
          </Card>
          {user.banner && (
            <Card
              isFooterBlurred
              radius="lg"
              className="border-none  max-h-[200px]"
            >
              <Link href={user.banner} target="_blank">
                <Image
                  alt={user.username}
                  className="object-cover"
                  height={600}
                  src={user.banner}
                  width={600}
                />
              </Link>
            </Card>
          )}
        </div>
      )}
      {error && <p>{error}</p>}
    </main>
  );
}
