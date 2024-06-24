/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.discordapp.com"],
  },
  reactStrictMode: false,
  async headers() {
    return [
      {
        source: "/app/fonts/:all*", // Ścieżka do plików, dla których chcesz dodać nagłówki
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "*", // Możesz ograniczyć do konkretnego źródła np. 'https://www.dcfaker.xyz'
          },
        ],
      },
    ];
  },
};

export default nextConfig;
