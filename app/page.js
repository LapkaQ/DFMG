"use client";
import Image from "next/image";
import Header from "./components/header";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { useMediaQuery } from "react-responsive";
import { Button, Link } from "@nextui-org/react";
import { useState, useEffect } from "react";
import "./mainPage.css";
export default function Home() {
  const isMobile = useMediaQuery({ query: "(max-width: 1000px)" });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;
  return (
    <main className="flex flex-col items-center gap-20">
      <Header />

      <div className="flex flex-col items-center gap-20">
        <div
          className={`contentMain  ${
            isMobile ? `flex-col justify-center` : `flex-row justify-between`
          }`}
        >
          <div
            className={`contentInfo flex flex-col gap-5  w-auto ${
              isMobile ? `items-center` : "items-start"
            }`}
          >
            <h1 className="text-3xl  font-[300] 	">Profile Viewer</h1>
            <p className="">
              Profile Viewer is a tool that allows you to display basic
              information about users by entering their unique identifier (ID).
              After entering the
              <span>
                {" "}
                <Link href="#accordionId">user ID</Link>
              </span>
              , the tool automatically fetches and displays their avatar and
              banner, if the user has them. This allows you to quickly and
              conveniently check visual information related to a given profile
              without having to log into the platform.
            </p>
            <Link href="/user">
              <Button color="secondary">Profile Viewer</Button>
            </Link>
          </div>
          <Image
            src="/images/profileViewer.png"
            alt="profile image"
            className="rounded-3xl shadow-2xl object-cover"
            width={500}
            height={500}
            quality={100}
          />
        </div>

        <div
          className={`contentMain  ${
            isMobile
              ? `flex-col justify-center`
              : `flex-row-reverse justify-between`
          }`}
        >
          <div
            className={`contentInfo flex flex-col gap-5  w-auto ${
              isMobile ? `items-center` : "items-end"
            }`}
          >
            <h1 className="text-3xl  font-[300] 	">Server Viewer</h1>
            <p className="">
              Server Viewer is an advanced tool for displaying detailed
              information about Discord servers. Just enter the
              <span>
                {" "}
                <Link href="#accordionId">server ID</Link>
              </span>
              , to instantly see its icon and splash (the graphic displayed
              during server invites). The tool requires the server to have the
              &quot;community&quot; feature enabled, ensuring that the displayed
              information is always up-to-date and consistent with the server
              settings.
            </p>
            <Link href="/server">
              <Button color="secondary">Server Viewer</Button>
            </Link>
          </div>
          <Image
            src="/images/serverViewer.png"
            alt="server image"
            className="rounded-3xl shadow-2xl object-cover"
            width={500}
            height={500}
            quality={100}
          />
        </div>

        <div
          className={`contentMain  ${
            isMobile ? `flex-col justify-center` : `flex-row justify-between`
          }`}
        >
          <div
            className={`contentInfo flex flex-col gap-5  w-auto ${
              isMobile ? `items-center` : "items-start"
            }`}
          >
            <h1 className="text-3xl  font-[300] 	">Message Creator</h1>
            <p className="">
              Message Creator is a creative tool that allows you to create fake
              messages that look identical to those sent on Discord. You can
              customize the message content, set your own send time, and choose
              the nickname color. It&apos;s an ideal solution for creating
              realistic message examples that can be used for humorous,
              educational, or presentation purposes.
            </p>
            <Link href="/message">
              <Button color="secondary">Message Creator</Button>
            </Link>
          </div>
          <Image
            src="/images/messageCreator.png"
            alt="created message image"
            className="rounded-3xl shadow-2xl object-cover"
            width={500}
            height={500}
            quality={100}
          />
        </div>
      </div>

      <div className="w-[70%]" id="accordionId">
        <Accordion variant="light" className="bg-black/10 rounded-xl">
          <AccordionItem
            key="1"
            aria-label="Accordion 1"
            title="How To Enable Developer Mode"
          >
            <Accordion variant="bordered">
              <AccordionItem
                key="1"
                aria-label="Accordion 1"
                title="Desktop"
                className=""
              >
                1. Tap on the cogwheel [] in the bottom left corner of the
                desktop app to open up your User Settings. <br />
                2. Then head to Advanced. <br />
                3. Now, tap on the main toggle next to Developer Mode to enable.
                A &quot;checkmark&quot; means it&apos;s enabled, while an
                &quot;x&quot; means it&apos;s disabled.
              </AccordionItem>
              <AccordionItem key="2" aria-label="Accordion 2" title="Mobile">
                1. Tap on your Avatar in the bottom-right corner. <br />
                2. Next, tap on the cogwheel [] in the top-right corner. <br />
                3. Now, scroll down until you see Advanced under App Settings.{" "}
                <br />
                4. Finally, tap on the toggle next to Developer Mode. A
                &quot;checkmark&quot; means it&apos;s enabled, while an
                &quot;x&quot; means it&apos;s disabled.
              </AccordionItem>
            </Accordion>
          </AccordionItem>
          <AccordionItem
            key="2"
            aria-label="Accordion 2"
            title="How To Find A User ID Number"
          >
            <Accordion variant="bordered">
              <AccordionItem key="1" aria-label="Accordion 1" title="Desktop">
                1. Navigate to where you want to copy the user ID from. <br />
                2. Next, right-click on the user and tap on Copy User ID. <br />
                3. After copying the user ID you can then paste it where needed.{" "}
                <br />
              </AccordionItem>
              <AccordionItem key="2" aria-label="Accordion 2" title="Mobile">
                1. Navigate to where you want to copy the user ID from. <br />
                2. Tap on the user and then tap on the ellipsis (...) in the
                top-right corner. <br />
                3. Next, tap on Copy User ID. <br />
                4. After copying the user ID you can then paste it where needed.
              </AccordionItem>
            </Accordion>
          </AccordionItem>
          <AccordionItem
            key="3"
            aria-label="Accordion 3"
            title="How To Find A Server ID Number"
          >
            <Accordion variant="bordered">
              <AccordionItem key="1" aria-label="Accordion 1" title="Desktop">
                1. Navigate to the server you want to copy the ID from. <br />
                2. right-click on the server icon, and then tap on Copy Server
                ID. <br />
                3. Now you can paste this server ID number where needed.
              </AccordionItem>
              <AccordionItem key="2" aria-label="Accordion 2" title="Mobile">
                1. Navigate to the server you want to copy the ID number from.{" "}
                <br />
                2. Tap on the ellipses (...) next to the server name. <br />
                3. Then scroll all the way down until you see Copy Server ID,
                tap on it to copy the server ID number. <br />
                4. Now you can paste this server ID number where needed.
              </AccordionItem>
            </Accordion>
          </AccordionItem>
        </Accordion>
      </div>
    </main>
  );
}
