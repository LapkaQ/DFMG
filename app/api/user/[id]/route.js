export async function GET(res, req) {
  const token =
    "MTI1MDc0MDkyMzA4OTAyNzA4Mw.GujlR8.rr3KE3H_jIALKLCX_AnfYCINPZC9J0es9QQeuw";
  const id = req.params.id;
  try {
    const response = await fetch(`https://discord.com/api/users/${id}`, {
      headers: {
        Authorization: `Bot ${token}`,
      },
    });
    console.log(response.status);
    if (!response.ok) {
      throw new Error("Failed to fetch user data");
    }

    const user = await response.json();

    const avatar = user.avatar
      ? user.avatar.startsWith("a_")
        ? `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.gif?size=1024`
        : `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png?size=1024`
      : null;

    const banner_color = user.banner_color;

    const banner = user.banner
      ? user.banner.startsWith("a_")
        ? `https://cdn.discordapp.com/banners/${user.id}/${user.banner}.gif?size=4096`
        : `https://cdn.discordapp.com/banners/${user.id}/${user.banner}.png?size=4096`
      : null;
    console.log(user);
    return new Response(
      JSON.stringify({
        username: user.username,
        avatar,
        banner_color,
        banner,
        name: user.global_name,
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
