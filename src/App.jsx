import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Button } from './components/Mybutton'
import './App.css'
import Cardcomponent,{Usercard} from './components/Cardcomponent'
import Profile from './components/Profile'
function App() {
  const [count, setCount] = useState(0)
  const data=[{
    name:"Cher Phea",
    src:" https://i.pinimg.com/564x/32/7a/34/327a34781f9f75c425150084c90a08cd.jpg"
  },
  {
    name:"Cher Leang",
   src:" https://i.pinimg.com/564x/20/af/43/20af436f0a222723035e0d43caefb9fe.jpg"
 },
  {
     name:"Cher Pheng",
    src:" https://i.pinimg.com/564x/ea/4c/0b/ea4c0b55cdf65d93ae32f63f54463813.jpg"
  },
  {
    name:"Student",
   src:"https://i.pinimg.com/564x/fe/cc/c8/feccc80bb5be433be0327ee40e3f1d5f.jpg "
 },
 {
  name:"Student",
 src:"https://i.pinimg.com/564x/78/2a/9b/782a9ba357d834585425bedc618445ce.jpg "
},
{
  name:"Student",
 src:"https://i.pinimg.com/564x/6a/ef/8e/6aef8eae9c1d7455258bae7b523d1ee8.jpg "
},
{
  name:"Student",
 src:"https://i.pinimg.com/564x/31/64/5a/31645a0f4f7f6fd7da0a2354564fdf24.jpg "
},
{
  name:"Student",
 src:"https://i.pinimg.com/564x/cf/0c/ae/cf0cae353cdfcf400a12f73e29db7c20.jpg"
},
{
  name:"Student",
 src:"https://i.pinimg.com/564x/42/1d/b1/421db1bc21e4ba4ad61e41d045ecb984.jpg"
},
{
  name:"Student",
 src:"https://i.pinimg.com/564x/e0/65/fd/e065fd81b0397afa5f03286d03e80c29.jpg"
}
]

  return (
    <>
  
      <Cardcomponent/>
      <div className="flex flex-wrap items-start gap-2 ">
      <Button size="xs" isProcessing>
        Click me!
      </Button>
      <Button size="sm" isProcessing gradientDuoTone="purpleToBlue">
        Click me!
      </Button></div>
      <Usercard/>
       <div className="w-4/5 mt-40 m-auto flex flex-wrap justify-between gap-5">
       {
        data.map((data,index)=>{
          return <Profile key={index} name={data.name} src={data.src}/>
        })
      }
        </div>
      <Button tittle="CLick me" style="block w-52 m-auto  px-5 py-3  text-xl  mt-5" />
    </>
    
  )
}


export default App
