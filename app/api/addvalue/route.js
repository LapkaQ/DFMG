// pages/api/addvalue.js

import { sql } from "@vercel/postgres";

export async function GET(req, res) {
  try {
    const { rows } = await sql`SELECT * FROM dcfakermessages`;
    return new Response(JSON.stringify({ rows }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (err) {
    return new Response(JSON.stringify({ message: err.message }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
export async function POST(req, res) {
  try {
    const { message } = await req.json();

    if (!message) {
      throw new Error("Messages is required");
    }
    const result =
      await sql`INSERT INTO dcfakermessages (user_id, message, data, name, user_image, session_id) 
        VALUES (${message.user.id}, ${message.message}, ${message.time}, ${
        message.user.name ? message.user.name : message.user.username
      }, ${message.user.avatar}, 'XXX')`;
    console.log(message);
    return new Response(
      JSON.stringify({
        message: "Value added successfully",
        value: { message },
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Error adding value:", error);
    return new Response(
      JSON.stringify({ message: error.message, details: error.stack }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
