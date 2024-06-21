"use client";
import Image from "next/image";
import { Card, CardFooter, Input, Button, Checkbox } from "@nextui-org/react";
import { FaMinusCircle } from "react-icons/fa";
import { useState } from "react";

export default function UserPanel(props) {
  const [colorStatus, setColorStatus] = useState(false);
  const {
    index,
    user,
    handleFormSubmit,
    InputHandler,
    handleCreateMessage,
    removeUser,
  } = props;

  const checkboxHandler = (e) => {
    setColorStatus((prevStatus) => !prevStatus);
  };

  return (
    <div className="userPanel min-w-[31vw] max-w-[31vw] relative">
      <Card
        isBlurred
        shadow="none"
        className="p-2 bg-white/5 text-white text-center"
      >
        <div className="userInput flex-row-reverse flex-wrap-reverse">
          <Button
            isIconOnly
            color="danger"
            aria-label="Remove"
            onClick={() => removeUser(index)}
            className="mt-2"
          >
            <FaMinusCircle color="white" />
          </Button>
          <form
            onSubmit={(e) => handleFormSubmit(e, index)}
            className="formId flex flex-col gap-2 justify-center items-center"
            name="form1"
          >
            <Input
              type="text"
              variant="underlined"
              color="secondary"
              label="User ID"
              name="input1"
              onChange={(e) => InputHandler(e, index)}
              value={user.userId}
              classNames={{
                input: "text-white text-center rounded-xl min-w-[150px]",
                label: "text-white ",
              }}
            />
            <Button color="secondary" type="submit">
              Submit
            </Button>
          </form>

          {user.user && (
            <Card isFooterBlurred radius="lg" className="border-none ">
              <Image
                alt={user.user.username}
                className="object-cover"
                height={200}
                src={user.user.avatar}
                width={200}
              />
              <CardFooter className="justify-center before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                <p className="gg-sans text-tiny font-[700] text-white/80 drop-shadow-2xl nicknameCard">
                  {user.user.name}
                </p>
              </CardFooter>
            </Card>
          )}
          {user.error && <p>{user.error}</p>}
        </div>
        {user.user && (
          <div className="createMessage p-2 m-2">
            <form
              onSubmit={(e) => handleCreateMessage(e, index)}
              className="flex flex-col gap-2"
            >
              <Checkbox
                defaultSelected={colorStatus}
                color="secondary"
                classNames={{
                  span: "text-white",
                }}
                isSelected={colorStatus}
                onChange={checkboxHandler}
              >
                Custom nick color
              </Checkbox>
              <div className="flex flex-row justify-center items-center gap-2">
                {colorStatus && (
                  <Input
                    type="text"
                    variant="flat"
                    color="secondary"
                    label="Color"
                    name="colorInput1"
                    onChange={(e) => InputHandler(e, index)}
                    value={user.userMessage.colorInput1}
                    isDisabled={!colorStatus}
                  />
                )}
                <Input
                  type="text"
                  variant="flat"
                  color="secondary"
                  label="Date"
                  name="dataInput1"
                  onChange={(e) => InputHandler(e, index)}
                  value={user.userMessage.dataInput1}
                />
                <Input
                  type="text"
                  variant="flat"
                  color="secondary"
                  label="Message"
                  name="messageInput1"
                  onChange={(e) => InputHandler(e, index)}
                  value={user.userMessage.messageInput1}
                />
              </div>
              <Button color="secondary" type="submit">
                Create
              </Button>
            </form>
          </div>
        )}
      </Card>
    </div>
  );
}
