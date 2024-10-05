import React from "react";
import { TypeAnimation } from 'react-type-animation';
import logo from '../../Assets/Parallax/MUN.gif';
import './Load.css';
import LoadingDots from './LoadingDots';

function Load() {

  const [display, setDisplay] = React.useState(false);
  React.useEffect(() => {
    setTimeout(() => {
      setDisplay(true);
    }, 3000)
  })
  return (
    <div className="load">
      <TypeAnimation
        sequence={[
          'MODEL UNITED NATIONS\n',
          1000,
        ]}
        wrapper="span"
        speed={50}
        style={{
          display: 'inline-block', color: "white", whiteSpace: 'pre-line', fontWeight: '500', fontFamily: 'Anton',
          WebkitTextStroke: '1px white',
          WebkitTextFillColor: 'transparent', letterSpacing: '0.3 rem'
        }}
        repeat={Infinity}
        cursor={false}
      />
      {display && <div className="logo">
        <img src={logo} alt="" />
        <LoadingDots />
      </div>}
    </div>
  )
}

export default Load