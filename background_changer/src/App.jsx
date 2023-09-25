import { useState } from "react"


function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
    
    
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}
    >
       <div className="flex h-full items-center justify-center">
          <h1 className="text-center text-4xl font-bold font-serif ">Rahul Choudhary</h1>
        </div>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
          onClick={() => setColor("red")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "red"}}
          >Red</button>
          <button
          onClick={() => setColor("green")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "green"}}
          >Green</button>
          <button
          onClick={() => setColor("blue")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "blue"}}
          >Blue</button> 

          <button
          onClick={() => setColor("Aqua")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "Aqua"}}
          >Aqua</button>


          <button
          onClick={() => setColor("CadetBlue")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "CadetBlue"}}
          >CadetBlue</button>

          <button
          onClick={() => setColor("DarkCyan")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "DarkCyan"}}
          >DarkCyan</button>

          
          <button
          onClick={() => setColor("DarkSlateGray")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "DarkSlateGray"}}
          >DarkSlateGray</button>


          
          <button
          onClick={() => setColor("LavenderBlush")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "LavenderBlush"}}
          >LavenderBlush</button>

           
          <button
          onClick={() => setColor("MediumPurple")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "MediumPurple"}}
          >MediumPurple</button>

          <button
          onClick={() => setColor("lightseagreen")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "lightseagreen"}}
          >lightseagreen</button>

        </div>
      </div>
    </div>
    </>
  )
}

export default App