import React from 'react'

export default function Text(props) {
  return (
    <>
         <h1 className={props.style ? props.style:"text-3xl text-center"}>{props.name ? props.name:"default"}</h1>
    </>
  )
}
