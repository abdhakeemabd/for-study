import { useState } from "react"





export default function RandomColor() {

    const [typeOfColor, setTypeOfColor] = useState ('hex');
    const [color, setColor] = useState('#000000')

    function handleCreateRandomHexColor(){
        const hex=[1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
        let hexColor ="#"
        for (i=0; i<6; i++){
            hexColor += 
        }
    }
    function handleCreateRandomRgbColor(){
    }

    return(
      <div style={{
            width : '100vw',
            height : '100vh',
            background : color,
        }}>
        <button onClick={()=> setTypeOfColor('hex')}>Create HEX color</button>
        <button onClick={()=> setTypeOfColor('rgb')}>Create RGB color</button>
        <button onClick={typeOfColor === 'hex' ? handleCreateRandomHexColor : handleCreateRandomRgbColor}>Generate random color</button>
      </div>
    )
}