import { useState } from "react"


function App() {
  const [color, setColor] = useState("black");

  return (
    <div className="w-full h-screen duration-500" style={{backgroundColor:color}}>
      <div className="fixed flex flex-wrap justify-center top-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shawdow bg-white px-3 py-2 rounded-3xl">
          <button onClick={()=>setColor("red")} className="outline-none px-4 py-1  rounded-full text-white shawdow-lg" style={{backgroundColor:"red"}}>Red</button>
          <button onClick={()=>setColor("blue")} className="outline-none px-4 py-1  rounded-full text-white shawdow-lg" style={{backgroundColor:"blue"}}>blue</button>
          <button onClick={()=>setColor("pink")} className="outline-none px-4 py-1  rounded-full text-white shawdow-lg" style={{backgroundColor:"pink"}}>Pink</button>
          <button onClick={function () {
            setColor("orange")
          }} className="outline-none px-4 py-1  rounded-full text-white shawdow-lg" style={{backgroundColor:"orange"}}>Orange</button>
          <button className="px-4 py-1 rounded-full text-white shawdow-lg" style={{backgroundColor:"Green"}} onClick={()=>setColor("green")}>Green</button>
          <button onClick={()=>setColor("olive")} className="text-white px-4 py-2 rounded-full"  style={{backgroundColor:"olive"}} >Olive</button>
          <button className="text-white px-4 py-2 rounded-full" onClick={()=>setColor("grey")} style={{backgroundColor:"grey"}} >Grey</button>
          <button className="text-white px-4 py-2 rounded-full" onClick={()=>setColor("purple")} style={{backgroundColor:"purple"}} >Purple</button>
          <button className="text-white px-4 py-2 rounded-full" onClick={()=>setColor("Black")} style={{backgroundColor:"Black"}} >Black</button>
          <button className="text-white px-4 py-2 rounded-full" onClick={()=>setColor("tan")} style={{backgroundColor:"tan"}} >tan</button>
        </div>
      </div>
    </div>
  )
}

export default App
