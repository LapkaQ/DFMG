require("dotenv").config();
import "dotenv/config";
export async function GET(res, req) {
  const token = process.env.DISCORD_TOKEN;
  console.log(process.env.DISCORD_TOKEN);
  const id = req.params.id;
  try {
    const response = await fetch(
      `https://discord.com/api/guilds/${id}/preview`,
      {
        headers: {
          Authorization: `Bot ${token}`,
        },
      }
    );
    console.log(response.status);
    if (!response.ok) {
      throw new Error("Failed to fetch guilds data");
    }

    const server = await response.json();
    console.log(server);
    const icon = server.icon
      ? server.icon.startsWith("a_")
        ? `https://cdn.discordapp.com/icons/${server.id}/${server.icon}.gif?size=1024`
        : `https://cdn.discordapp.com/icons/${server.id}/${server.icon}.png?size=1024`
      : null;
    const splash = server.splash
      ? server.splash.startsWith("a_")
        ? `https://cdn.discordapp.com/splashes/${server.id}/${server.splash}.gif?size=2048`
        : `https://cdn.discordapp.com/splashes/${server.id}/${server.splash}.png?size=2048`
      : null;
    const banner = server.BANNER
      ? server.BANNER.startsWith("a_")
        ? `https://cdn.discordapp.com/banners/${server.id}/${server.BANNER}.gif?size=2048`
        : `https://cdn.discordapp.com/banners/${server.id}/${server.BANNER}.png?size=2048`
      : null;
    return new Response(
      JSON.stringify({
        name: server.name,
        icon,
        splash,
        // banner,
        // server,
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Error fetching user:", error);
    return new Response(
      JSON.stringify({ error: "Failed to fetch user data" }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
