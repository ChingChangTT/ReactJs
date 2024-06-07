import React from 'react'

export default function Avatar(props) {
  return ( 
    // <img className="w-[150px] h-[150px] object-cover border-r-8" src={props.src ? props.src:" https://i.pinimg.com/736x/2e/79/bc/2e79bc67a9fcb56ee4cfce74e7b8e24f.jpg"} alt="avatar" />
    <img className={props.style ? props.style :" w-[150px] h-[150px] object-cover rounded-full"} src={props.src ? props.src:" https://i.pinimg.com/736x/2e/79/bc/2e79bc67a9fcb56ee4cfce74e7b8e24f.jpg"} alt="avatar" />

  )
}
