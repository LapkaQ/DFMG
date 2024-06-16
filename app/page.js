"use client";
import Image from "next/image";
import Header from "./components/header";
import { Accordion, AccordionItem } from "@nextui-org/react";

import { Button } from "@nextui-org/react";
import "./mainPage.css";
export default function Home() {
  return (
    <main className="flex flex-col items-center gap-20">
      <Header />

      <div className="flex flex-col items-center gap-20">
        <div className="contentMain">
          <p className="w-1/2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere,
            hic laboriosam! Sequi quasi illo repellat ipsum ad, pariatur commodi
            mollitia illum, tempora sunt modi qui assumenda? Modi doloribus
            magnam et. Illo ea perferendis totam atque repellendus recusandae
            architecto molestias id, aspernatur libero iste, labore sapiente
            repudiandae magnam necessitatibus ipsa consequuntur nesciunt, eum
            asperiores inventore eos error. Commodi iure mollitia nesciunt.
            Corporis eius iure quaerat, alias cumque nobis nemo ab reprehenderit
            ipsum voluptatibus vel voluptate qui non voluptates repellat eaque
            quibusdam? Deserunt impedit ullam iusto laborum suscipit et optio
            harum reprehenderit. Saepe mollitia necessitatibus obcaecati, in
            distinctio est expedita voluptatibus hic. Repudiandae labore, vitae
            provident eveniet ipsum aut perferendis rerum esse veniam sint quod
            beatae laboriosam! Nulla quidem beatae consequuntur natus!
            Perferendis saepe provident odit iusto blanditiis, maiores iste esse
            libero sed rem enim eum quibusdam iure dicta ut. Ipsum, illo?
            Impedit dicta ipsa provident dolores vitae asperiores voluptatem qui
            hic? Deleniti reiciendis corrupti itaque? Asperiores cum voluptate
            libero corporis dolore dolorem vero unde quae adipisci nemo.
            Explicabo quia, obcaecati veritatis exercitationem, blanditiis et
            itaque iusto eos eum ipsa ab ducimus. Quaerat nisi cumque quia nemo,
            eligendi maxime quae nam veritatis perspiciatis laborum dolores
            laboriosam, consequuntur fuga omnis deleniti! Et, maxime! Ea, vel?
            Reiciendis dolor perspiciatis dicta officia illo, impedit odit.
            Maiores eius molestias, iste, consequatur facilis saepe atque
            tempora sed provident quas odio? Consequuntur neque vero dolore,
            perferendis rerum quasi suscipit odit natus delectus tenetur
            consectetur quas blanditiis ipsum expedita. Totam praesentium
            laboriosam possimus voluptatem officiis porro nesciunt suscipit vel
            nihil est optio consequuntur veniam, tempora libero, nam dolore
            quisquam tempore, atque vitae molestias? Delectus natus totam esse
            consequatur similique. Illum vitae, aut eos totam, fuga laboriosam
            placeat pariatur voluptates culpa eum dolorum doloremque recusandae
            at in facilis temporibus eligendi cum excepturi eveniet consectetur
            beatae earum? Impedit tenetur saepe earum.
          </p>
          <Image
            src="/images/profileViewer.png"
            alt="profile image"
            className="w-1/3 rounded-3xl shadow-2xl"
            width={500}
            height={500}
            quality={100}
            style={{
              width: "500px",
              height: "500px",
            }}
          />
        </div>
        <div className="contentMain">
          <Image
            src="/images/messageCreator.png"
            alt="profile image"
            className="w-1/3 rounded-3xl shadow-2xl"
            width={500}
            height={500}
            quality={100}
            style={{
              width: "500px",
              height: "500px",
            }}
          />
          <p className="w-1/2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere,
            hic laboriosam! Sequi quasi illo repellat ipsum ad, pariatur commodi
            mollitia illum, tempora sunt modi qui assumenda? Modi doloribus
            magnam et. Illo ea perferendis totam atque repellendus recusandae
            architecto molestias id, aspernatur libero iste, labore sapiente
            repudiandae magnam necessitatibus ipsa consequuntur nesciunt, eum
            asperiores inventore eos error. Commodi iure mollitia nesciunt.
            Corporis eius iure quaerat, alias cumque nobis nemo ab reprehenderit
            ipsum voluptatibus vel voluptate qui non voluptates repellat eaque
            quibusdam? Deserunt impedit ullam iusto laborum suscipit et optio
            harum reprehenderit. Saepe mollitia necessitatibus obcaecati, in
            distinctio est expedita voluptatibus hic. Repudiandae labore, vitae
            provident eveniet ipsum aut perferendis rerum esse veniam sint quod
            beatae laboriosam! Nulla quidem beatae consequuntur natus!
            Perferendis saepe provident odit iusto blanditiis, maiores iste esse
            libero sed rem enim eum quibusdam iure dicta ut. Ipsum, illo?
            Impedit dicta ipsa provident dolores vitae asperiores voluptatem qui
            hic? Deleniti reiciendis corrupti itaque? Asperiores cum voluptate
            libero corporis dolore dolorem vero unde quae adipisci nemo.
            Explicabo quia, obcaecati veritatis exercitationem, blanditiis et
            itaque iusto eos eum ipsa ab ducimus. Quaerat nisi cumque quia nemo,
            eligendi maxime quae nam veritatis perspiciatis laborum dolores
            laboriosam, consequuntur fuga omnis deleniti! Et, maxime! Ea, vel?
            Reiciendis dolor perspiciatis dicta officia illo, impedit odit.
            Maiores eius molestias, iste, consequatur facilis saepe atque
            tempora sed provident quas odio? Consequuntur neque vero dolore,
            perferendis rerum quasi suscipit odit natus delectus tenetur
            consectetur quas blanditiis ipsum expedita. Totam praesentium
            laboriosam possimus voluptatem officiis porro nesciunt suscipit vel
            nihil est optio consequuntur veniam, tempora libero, nam dolore
            quisquam tempore, atque vitae molestias? Delectus natus totam esse
            consequatur similique. Illum vitae, aut eos totam, fuga laboriosam
            placeat pariatur voluptates culpa eum dolorum doloremque recusandae
            at in facilis temporibus eligendi cum excepturi eveniet consectetur
            beatae earum? Impedit tenetur saepe earum.
          </p>
        </div>
      </div>

      <div className="w-[70%]">
        <Accordion variant="light" className="bg-black/10 rounded-xl">
          <AccordionItem
            key="1"
            aria-label="Accordion 1"
            title="How To Enable Developer Mode            "
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
                A “checkmark” means it’s enabled, while an “x” means it’s
                disabled.
              </AccordionItem>
              <AccordionItem key="2" aria-label="Accordion 2" title="Mobile">
                1. Tap on your Avatar in the bottom-right corner. <br />
                2. Next, tap on the cogwheel [] in the top-right corner. <br />
                3. Now, scroll down until you see Advanced under App Settings.{" "}
                <br />
                4. Finally, tap on the toggle next to Developer Mode. A
                “checkmark” means it’s enabled, while an “x” means it’s
                disabled.
              </AccordionItem>
            </Accordion>
          </AccordionItem>
          <AccordionItem
            key="2"
            aria-label="Accordion 2"
            title="How To Find A User ID Number
"
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
                ID.. <br />
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
