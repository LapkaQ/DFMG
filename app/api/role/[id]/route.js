require("dotenv").config();
import "dotenv/config";
export async function GET(res, req) {
  const token = process.env.DISCORD_TOKEN;
  const id = req.params.id;
  const cacheBuster = new Date().getTime();

  try {
    const response = await fetch(
      `https://discord.com/api/v10/users/${id}?cache_buster=${cacheBuster}`,
      {
        headers: {
          Authorization: `Bot ${token}`,
          "Cache-Control": "no-cache",
        },
      }
    );
    console.log(response.status);
    if (!response.ok) {
      throw new Error("Failed to fetch role data");
    }

    const role = await response.json();
    console.log(role);
    const avatar = user.avatar
      ? user.avatar.startsWith("a_")
        ? `https://cdn.discordapp.com/icons/${user.id}/${user.avatar}.gif?size=1024`
        : `https://cdn.discordapp.com/icons/${user.id}/${user.avatar}.png?size=1024`
      : null;

    const banner_color = user.banner_color;
    const avatar_dec = user.avatar_decoration_data
      ? `https://cdn.discordapp.com/avatar-decoration-presets/${user.avatar_decoration_data.asset}.png`
      : null;
    const banner = user.banner
      ? user.banner.startsWith("a_")
        ? `https://cdn.discordapp.com/banners/${user.id}/${user.banner}.gif?size=4096`
        : `https://cdn.discordapp.com/banners/${user.id}/${user.banner}.png?size=4096`
      : null;
    console.log(user);

    return new Response(
      JSON.stringify({
        role,
        // username: user.username,
        // avatar,
        // banner_color,
        // banner,
        // name: user.global_name,
        // avatar_dec,
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
