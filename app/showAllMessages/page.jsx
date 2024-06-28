"use client";
import { useState, useEffect } from "react";
import AddValueForm from "../components/AddValueForm";
import "../message/messagePage.css";
import Image from "next/image";
import LoginComponent from "../components/LoginComponent";
export default function Cart({ params }) {
  const [rows, setRows] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const fetchData = async () => {
    try {
      const res = await fetch("/api/addvalue");

      if (!res.ok) {
        throw new Error("Failed to fetch values");
      }

      const data = await res.json();
      setRows(data.rows);
    } catch (err) {
      console.error("Error fetching values:", err);
    }
  };

  useEffect(() => {
    fetchData();

    const loggedIn = localStorage.getItem("isLoggedIn");
    if (loggedIn === process.env.NEXT_PUBLIC_LOGIN_PASSWORD) {
      setIsLoggedIn(true);
    }
  }, []);
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };
  return (
    <main className="flex flex-col gap-5 items-center justify-center">
      {isLoggedIn ? (
        <>
          <div className="messages">
            <div className="containter">
              {rows.length != 0 ? (
                (console.log(rows.length),
                rows.map((row) => (
                  <div
                    key={row.id}
                    className="full-message flex flex-row items-start gap-1"
                  >
                    <div className="relative p-2 ">
                      <Image
                        alt={row.name}
                        className="object-cover rounded-3xl "
                        height={40}
                        src={row.user_image}
                        width={40}
                        style={{
                          width: "40px",
                          height: "40px",
                        }}
                      />
                    </div>
                    <div className="texts-message flex flex-col  p-1">
                      <div className="top-message flex flex-row items-end gap-3 	">
                        <p className="messageUsername gg-sans text-base font-[500]">
                          {row.name}
                        </p>
                        <p className="messageTime gg-sans font-[400] text-[#a6aeb8] text-nowrap">
                          {row.data}
                        </p>
                      </div>
                      <p className="messageMessage gg-sans font-[400] text-[#d9dcdf] break-words whitespace-pre-wrap">
                        {row.message}
                      </p>
                    </div>
                  </div>
                )))
              ) : (
                <p className="text-center">Brak wiadomości! 😝😜😝</p>
              )}
            </div>
          </div>
          <button onClick={handleLogout}>Wyloguj się</button>
        </>
      ) : (
        <LoginComponent onLogin={setIsLoggedIn} />
      )}
    </main>
  );
}
