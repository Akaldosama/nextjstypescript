import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="container grid place-items-center text-center">
        <div className="child px-[20px] w-[800px]">
          <h1 className="text-3xl">Home</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium porro earum nulla illo architecto consectetur eos a eum voluptates, dignissimos voluptate, iusto nobis necessitatibus excepturi odio, accusamus quidem sapiente totam.</p><br />
          <Link href='/login' className="font-semibold underline">Link to 1 homework</Link><br /><br />
          <Link href='/Router' className="font-semibold underline">Link to 2 homework</Link>
        </div>
      </div>
    </main>
  );
}
