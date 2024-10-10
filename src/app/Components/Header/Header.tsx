import Link from 'next/link'
import React from 'react'

function Header() {
    return (
        <>
         <nav className=" w-full bg-slate-400 h-10 text-center font-black font-serif text-black ">
            <Link href={'/'} className='mr-5'>Home</Link>
            <Link href={'#about'} className='mr-5'>About</Link>
            <Link href={'#contact'}>Contact</Link>
    </nav>
        </>
    )
}

export default Header
