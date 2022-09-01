import React from 'react';
import BaseIcon from './BaseIcon.js';
import Java from './IconImages/Java.png';
import JavaScript from './IconImages/JavaScript.png';
import Csharp from './IconImages/CSharp.png';
import CSS from './IconImages/CSS.png';
import HTML from './IconImages/HTML.png';
import IconForReact from './IconImages/React.png';
import Unity from './IconImages/Unity.png';

const IconRow = () => {

  var JavaScriptIcon = <BaseIcon startX={10} endX={10} startRotate={-60} endRotate={60} Icon={JavaScript} />;
  var JavaIcon = <BaseIcon startX={40} endX={40} startRotate={60} endRotate={-60} Icon={Java} />;
  var CSharpIcon = <BaseIcon startX={60} endX={60} startRotate={-50} endRotate={80} startScale={.4} endScale={.8} Icon={Csharp} />;
  var UnityIcon = <BaseIcon startX={-70} endX={-75} startRotate={-40} endRotate={40} Icon={Unity} />;
  var CSSIcon = <BaseIcon startX={-100} endX={-100} startRotate={-10} endRotate={100} startScale={.6} endScale={.75} Icon={CSS} />;
  var HTMLIcon = <BaseIcon startX={-30} endX={-30} startRotate={60} endRotate={-90} startScale={.75} endScale={1} Icon={HTML} />;
  var ReactIcon = <BaseIcon startX={100} endX={100} startRotate={40} endRotate={-100} startScale={.6} endScale={.8} Icon={IconForReact} />;

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      marginTop: '-7%',
      justifyContent: 'center',
      height: '70vh'
    }}>
      {JavaIcon}
      {JavaScriptIcon}
      {CSharpIcon}
      {UnityIcon}
      {CSSIcon}
      {HTMLIcon}
      {ReactIcon}
    </div>
  )
}

export default IconRow