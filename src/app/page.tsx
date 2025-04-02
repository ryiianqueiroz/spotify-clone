import Explore from "@/components/Explore/Explore";
import Library from "@/components/Library/Library";
import NavBar from "@/components/NavBar/NavBar";
import Play from "@/components/Play/Play";
import { Inter } from 'next/font/google'
 
// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ['latin'] })

export default async function Home() {
  const res = await fetch("https://api.spotify.com/v1/artists/1Xyo4u8uXC1ZmMpatF05PJ?si=UDk-gMWEQReWWoPnladZAw", {
    headers: {
      Authorization: "Bearer BQDtPvWkzi4rSsKnDfEEssCTS7HUwOx722P7OUNkq6ZsLJ_6JfogyW0iN1PoQhWKs2bKMDqpvKdAYOulCqqDGV8Q-a06r2M9qyD7J6zctvzKqksevqXGdjlUsBbrPJftUZnxapAc4oo",
    },
    cache: "no-store", // Evita cache em SSR
  });

  const data = await res.json();

  console.log(data)

  return (
    <div className={`${inter.className} relative w-[100vw] h-[100vh]`}>
      <NavBar></NavBar>
      <Play></Play>
      <div className="flex flex-1 min-h-0">
        <Library></Library>
        <Explore></Explore>
      </div>
    </div>
  );
}
