import Head from "next/head";
import movieSearch from "./components/movieSearch";

export default function Home() {
  return (
    <div className="bg-black flex min-h-screen flex-col items-center justify-center font-bold p-24 text-2xl text-cyan-500">
      <Head>
        <title>Movie Database</title> 
        <meta name="description" content="A simple movie database" />
      </Head>
      <main className="container mx-auto py-10 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-8 text-cyan-400">Movie Database</h1>
      </main>
    </div>
  );
}

