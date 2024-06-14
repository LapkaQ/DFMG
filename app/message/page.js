"use client";

import { FaPlusCircle, FaMinusCircle, FaTrash } from "react-icons/fa";
import "./messagePage.css";
import Image from "next/image";
import { Card, CardFooter, Input, Button } from "@nextui-org/react";
import { useState } from "react";
import UserPanel from "../components/UserPanel";

export default function Message() {
  const [users, setUsers] = useState([]);
  const [messages, setMessages] = useState([]);

  const handleFormSubmit = async (e, index) => {
    e.preventDefault();
    const userId = users[index].userId;
    try {
      const response = await fetch(`/api/user/${userId}`);
      if (!response.ok) {
        throw new Error("Failed to fetch user");
      }
      const userData = await response.json();
      setUsers((prevUsers) => {
        const newUsers = [...prevUsers];
        newUsers[index].user = userData;
        newUsers[index].error = null;
        return newUsers;
      });
    } catch (error) {
      console.error("Error fetching user:", error);
      setUsers((prevUsers) => {
        const newUsers = [...prevUsers];
        newUsers[index].error = "Podaj prawidłowe id!";
        newUsers[index].user = null;
        return newUsers;
      });
    }
  };

  const InputHandler = (e, index) => {
    const { name, value } = e.target;
    setUsers((prevUsers) => {
      const newUsers = [...prevUsers];
      if (name === "input1") {
        newUsers[index].userId = value;
      } else if (name === "dataInput1" || name === "messageInput1") {
        newUsers[index].userMessage = {
          ...newUsers[index].userMessage,
          [name]: value,
        };
      }
      return newUsers;
    });
  };

  const handleCreateMessage = (e, index) => {
    e.preventDefault();
    setMessages((prevMessages) => [
      ...prevMessages,
      {
        user: users[index].user,
        time: users[index].userMessage.dataInput1,
        message: users[index].userMessage.messageInput1,
      },
    ]);
    setUsers((prevUsers) => {
      const newUsers = [...prevUsers];
      newUsers[index].userMessage = {
        dataInput1: "",
        messageInput1: "",
      };
      return newUsers;
    });
  };

  const handleRemoveLastMessage = () => {
    setMessages((prevMessages) => {
      const newMessages = [...prevMessages];
      newMessages.pop();
      return newMessages;
    });
  };
  const handleRemoveAllMessage = () => {
    setMessages([]);
  };

  const createNewUser = () => {
    setUsers((prevUsers) => [
      ...prevUsers,
      {
        userId: "",
        user: null,
        userMessage: {
          dataInput1: "",
          messageInput1: "",
        },
        error: null,
      },
    ]);
  };

  const removeUser = (index) => {
    setUsers((prevUsers) => {
      const newUsers = [...prevUsers];
      newUsers.splice(index, 1);
      return newUsers;
    });
  };
  const CreateMessage = () => {
    return messages.map((message, index) => (
      <div key={index} className="full-message flex flex-row items-start gap-3">
        <Image
          alt={message.user.username}
          className="object-cover rounded-3xl"
          height={40}
          src={message.user.avatar}
          width={40}
        />
        <div className="texts-message flex flex-col">
          <div className="top-message flex flex-row items-center gap-2">
            <p className="messageUsername gg-sans text-base font-[500]">
              {message.user.name}
            </p>
            <p className="messageTime gg-sans font-[400] text-[#a6aeb8]">
              {message.time}
            </p>
          </div>
          <p className="messageMessage gg-sans font-[400] text-[#d9dcdf] break-words max-w-[800px]">
            {message.message}
          </p>
        </div>
      </div>
    ));
  };

  return (
    <main className="flex flex-col gap-20 ">
      <div className="usersInputs flex flex-row justify-evenly items-center gap-20">
        {users.map((user, index) => (
          <UserPanel
            key={index}
            index={index}
            user={user}
            handleFormSubmit={handleFormSubmit}
            InputHandler={InputHandler}
            handleCreateMessage={handleCreateMessage}
            removeUser={removeUser}
          />
        ))}
        <Button
          isIconOnly
          color="secondary"
          aria-label="Add"
          onClick={createNewUser}
        >
          <FaPlusCircle color="white" />
        </Button>
      </div>
      {messages.length > 0 && (
        <>
          <div className="messages ">
            <div className="containter">{CreateMessage()}</div>
          </div>
          <div className="remove-last-message flex justify-center mt-4 gap-5">
            <Button
              color="danger"
              aria-label="Remove Last Message"
              onClick={handleRemoveLastMessage}
              startContent={<FaTrash color="white" />}
            >
              Remove<span className="font-black">Last</span>Message
            </Button>
            <Button
              color="danger"
              aria-label="Remove Last Message"
              onClick={handleRemoveAllMessage}
              startContent={<FaTrash color="white" />}
            >
              Remove<span className="font-black">All</span>Message
            </Button>
          </div>
        </>
      )}
    </main>
  );
}
