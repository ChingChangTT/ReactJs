import React from 'react'
import Avatar from './Avatar'
const defaultImage = "https://i.pinimg.com/564x/cc/7e/0b/cc7e0bfe0e5deba85260c2d9dd1c87ca.jpg";
import Text from './Text';
export default function Profile({src,name}) {
  return (
    <div>
    <Avatar style="w-[200px] h-[200px] object-cover border-r-8 rounded-full m-auto"  src={src} />
   <Text style=" font-bold text-3xl text-center" name={name} />
    </div>
  )
}
