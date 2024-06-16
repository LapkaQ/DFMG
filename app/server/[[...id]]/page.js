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
  Code,
} from "@nextui-org/react";
import Link from "next/link";
require("dotenv").config();

export default function Home({ params }) {
  const router = useRouter();
  const [id, setId] = useState("");
  const [guild, setGuild] = useState(null);
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
    console.log(`Fetching guild with ID: ${id}`);

    try {
      const response = await fetch(`/api/server/${id}`);
      console.log(`API response status: ${response.status}`);
      if (!response.ok) {
        throw new Error("Failed to fetch guild");
      }

      const guildData = await response.json();
      console.log("Guild data fetched successfully:", guildData);
      setGuild(guildData);
      setError(null);
    } catch (error) {
      console.error("Error fetching guild:", error);
      setError("Please enter a valid ID!");
      setGuild(null);
    }
  };

  const InputHandler = (e) => {
    setId(e.target.value);
  };
  return (
    <main className="flex justify-between items-center gap-5 flex-col">
      <Header text="Discord Server Viewer" custom="True" height="100" />

      <Code color="warning">
        To receive the server icon and splash, the server must have enabled
        community!
      </Code>

      <div className="flex justify-center items-center gap-5 flex-col grow">
        <form
          onSubmit={handleFormSubmit}
          className="formId flex flex-col gap-2 justify-center items-center"
        >
          <Input
            type="text"
            variant="underlined"
            color="secondary"
            label="Guild ID"
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
        {guild && (
          <div className="flex justify-center items-center flex-row gap-2 flex-wrap">
            <Card isFooterBlurred radius="lg" className="border-none ">
              <Link href={guild.icon} target="_blank">
                <Image
                  alt={guild.name}
                  className="object-cover"
                  height={200}
                  src={guild.icon}
                  width={200}
                />
              </Link>
              <CardFooter className="justify-center before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                <p className="text-tiny font-[700] text-white/80 drop-shadow-2xl nicknameCard gg-sans">
                  {guild.name}
                </p>
              </CardFooter>
            </Card>
            {guild.splash && (
              <Card
                isFooterBlurred
                radius="lg"
                className="border-none  max-h-[200px] flex justify-center"
              >
                <Link href={guild.splash} target="_blank">
                  <Image
                    alt={guild.name}
                    height={600}
                    src={guild.splash}
                    width={600}
                  />
                </Link>
              </Card>
            )}
          </div>
        )}
        {error && <p>{error}</p>}
      </div>
    </main>
  );
}
