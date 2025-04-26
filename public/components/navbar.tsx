import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


export default function Navbar() {
  return (
    <>
        <div className="bg-bgs flex flex-col md:flex-row items-center justify-center md:justify-between gap-2 p-4 border-b border-gold">
            <Image
                src="/logo-jb.png"
                alt="Logo"
                width={260}
                height={80}
            />
            <div className="flex flex-col md:flex-row items-center justify-center text-text gap-6 md:gap-10">
                <Link href="/" target='_blank' className='text-xl md:text-[32px] transition-all duration-300 hover:text-gold hover:scale-125'>Sobre Nós</Link>
                <Link href="/vitrine" target='_blank' className='text-xl md:text-[32px] transition-all duration-300 hover:text-gold hover:scale-125'>Vitrine</Link>
                <Link href="/contato" target='_blank' className='text-xl md:text-[32px] transition-all duration-300 hover:text-gold hover:scale-125'>Contrato</Link>
            </div>
        </div>
    </>
  )
}