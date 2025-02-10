import React from 'react'
import { Link } from 'react-router-dom'

function Root({setData}) {

  return (
    <section className='w-screen h-screen flex justify-center items-center'>
        <div className='w-[60%] h-[60%] block bg-black rounded-3xl'>
            <div className='h-1/3 w-full flex justify-center items-center'>
                <Link onClick={() => setData("armin")} to={"/school_portfolio_web/armin"} className='hover:text-4xl duration-150 text-sky-700 text-2xl'>Ármin</Link>
            </div>
            <div className='h-1/3 w-full flex justify-center items-center'>
                <Link onClick={() => setData("gergo")} to={"/school_portfolio_web/gergo"} className='hover:text-4xl duration-150 text-sky-700 text-2xl'>Gergő</Link>
            </div>
            <div className='h-1/3 w-full flex justify-center items-center'>
                <Link onClick={() => setData("balazs")} to={"/school_portfolio_web/balazs"} className='hover:text-4xl duration-150 text-sky-700 text-2xl'>Balázs</Link>
            </div>
        </div>
    </section>
  )
}

export default Root