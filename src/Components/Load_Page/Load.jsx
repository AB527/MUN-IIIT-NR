import React from "react"
import './Load.css'
import { TypeAnimation } from 'react-type-animation';
import { colors } from "@mui/material";
import logo from '../../Assets/Parallax/MUN.gif';
import { dotPulse } from 'ldrs'

dotPulse.register()

function Load(){

    const [display,setDisplay] = React.useState(false);
    React.useEffect(()=>{
        setTimeout(()=>{
            setDisplay(true);
        },3000)
    })
    return(
        <div className="load">
              <TypeAnimation
      sequence={[
        'MODEL UNITED NATIONS\n IIIT-Naya Raipur',
        1000,
      ]}
      wrapper="span"
      speed={50}
      style={{  display: 'inline-block', color:"white",whiteSpace: 'pre-line', fontWeight:'500', fontFamily: 'Anton',
        webkitTextStroke: '1px white',
        webkitTextFillColor: 'transparent',letterSpacing:'0.3 rem'}}
      repeat={Infinity}
      cursor={false}
    />
    {display && <div className="logo">
    <img src={logo} alt="" />
    <l-dot-pulse
  size="43"
  speed="1.3" 
  color="white" 
></l-dot-pulse>
    </div>}
        </div>
    )
}

export default Load