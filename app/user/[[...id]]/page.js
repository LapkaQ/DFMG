"use client";
import "dotenv/config";
import Header from "@/app/components/header";
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
require("dotenv").config();

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
    console.log(`Fetching user with ID: ${id}`);

    try {
      const response = await fetch(`/api/user/${id}`);
      console.log(`API response status: ${response.status}`);
      if (!response.ok) {
        throw new Error("Failed to fetch user");
      }

      const userData = await response.json();
      console.log("User data fetched successfully:", userData);
      setUser(userData);
      setError(null);
    } catch (error) {
      console.error("Error fetching user:", error);
      setError("Please enter a valid ID!");
      setUser(null);
    }
  };

  const InputHandler = (e) => {
    setId(e.target.value);
  };
  return (
    <main className="flex justify-between items-center gap-5 flex-col">
      <Header text="Discord Profile Viewer" custom="True" height="100" />

      <div className="flex justify-center items-center gap-5 flex-col grow">
        <form
          onSubmit={handleFormSubmit}
          className="formId flex flex-col gap-2 justify-center items-center"
        >
          <Input
            type="text"
            variant="underlined"
            color="secondary"
            label="User ID"
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
          <div className="flex justify-center items-center flex-row gap-2 flex-wrap">
            {user.avatar && (
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
            )}

            {user.banner && (
              <Card
                isFooterBlurred
                radius="lg"
                className="border-none  max-h-[200px] flex justify-center"
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
            {!user.banner && !user.avatar && (
              <h1>This user does not have an avatar and banner</h1>
            )}
          </div>
        )}
        {error && <p>{error}</p>}
      </div>
    </main>
  );
}
