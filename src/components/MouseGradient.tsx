"use client"
import { useEffect } from "react"

export default function MouseGradient(){
    
    useEffect(() => {
        const handleMouseMove = (event:MouseEvent)=>{
            const cursor = document.querySelector('.cursor-gradient') as HTMLElement;
            if(!cursor) return;
            const x = event.clientX
            const y = event.clientY
            console.log(x,y)
            cursor.style.background = `radial-gradient(circle at ${x}px ${y}px, 
                rgba(45,212,192,0.15), rgba(0, 0, 0, 0) 
                50% )`;
            
        }
        document.addEventListener('mousemove', handleMouseMove);
        
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        }
    },)

    return(
        <div className="cursor-gradient z-0
        origin-bottom-right h-full w-full ">
        </div>
    )
}