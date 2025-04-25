'use client'

import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white font-sans bg-[url(/teste.jpg)] bg-cover bg-center bg-no-repeat">
      {/* Navbar */}
      <header className="flex items-center justify-between px-6 py-4">
        <Image
          src="https://lh3.googleusercontent.com/p/AF1QipMzdVIMYjtfe-pOGlRW4Ca5afsf1ciIzU4xyH6s=s680-w680-h510"
          alt="Logo Jorge Bischoff"
          width={60}
          height={60}
          className="rounded-full"
        />
      </header>{/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-20">
        <h1 className="text-4xl md:text-6xl font-light tracking-wide">
          Explore a sofisticação
        </h1>
        <h2 className="text-xl md:text-2xl mt-4 text-neutral-300">
          Jorge Bischoff – Center Shopping
        </h2>

        <button className="mt-10 px-6 py-3 bg-white text-black font-medium rounded-full hover:bg-neutral-200 transition">
          Ver Coleção
        </button>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-800 text-sm text-neutral-400 text-center py-6">
        © {new Date().getFullYear()} Jorge Bischoff – Center Shopping. Todos os direitos reservados.
      </footer>
    </main>
  )
}
