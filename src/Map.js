import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { useState,useEffect } from 'react'

function Map({curr}) {
    
    const [Focus, setFocus] = useState([["none","none","none"],["text-xl","text-xl","text-xl"]])

    useEffect(() => {
      
        setFocusF(curr)
    }, [])

    const setFocusF = (x) => {
        switch (x) {
            case "armin":
                setFocus([["underline","none","none"],["text-2xl","text-xl","text-xl"]])
                break;
          
            case "balazs":
                setFocus([["none","underline","none"],["text-xl","text-xl","text-2xl"]])
                break;
            case "gergo":
                setFocus([["none","none","underline"],["text-xl","text-2xl","text-xl"]])
                break;
        }
    }
    

    return (
    <>
    <nav className='w-full h-[50px] flex justify-evenly items-center fixed bg-white z-10'>
        <Link onClick={() =>setFocusF("armin")} to={"/school_portfolio_web/armin"} className={Focus[1][0]} style={{textDecoration:Focus[0][0]}} >Ármin</Link>
        <Link onClick={() =>setFocusF("gergo")} to={"/school_portfolio_web/gergo"} className={Focus[1][1]} style={{textDecoration:Focus[0][2]}}>Gergő</Link>
        <Link onClick={() =>setFocusF("balazs")} to={"/school_portfolio_web/balazs"} className={Focus[1][2]} style={{textDecoration:Focus[0][1]}}>Balázs</Link>
        <Link className='text-xl' to={"/school_portfolio_web"} >Home</Link>
    </nav>
    <Outlet />
    </>
  )
}

export default Map