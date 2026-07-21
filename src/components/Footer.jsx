import React from 'react'
import { Link } from 'react-router-dom'
function Footer() {

  return (
    <div className='h-15 bg-slate-100 flex flex-col justify-around items-center text text-slate-400 text-[14px]'>
            <h1> © 2026 TravelApp All right reserved.</h1>
            <div className='flex justify-between w-50 '>
                <Link to="/" className='hover:text-blue-500'>Anasayfa</Link>
                <Link to="/contact" className='hover:text-blue-500'>İletişim</Link>
                <Link to="/about" className='hover:text-blue-500'>Hakkımızda</Link>
            </div>
    </div>
  )
}

export default Footer;


