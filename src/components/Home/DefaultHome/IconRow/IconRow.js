import BaseIcon from "./BaseIcon.js";
import Java_Icon from "../../IconImages/Java.png";
import JavaScript_Icon from "../../IconImages/JavaScript.png";
import Csharp_Icon from "../../IconImages/CSharp.png";
import CSS_Icon from "../../IconImages/CSS.png";
import HTML_Icon from "../../IconImages/HTML.png";
import React_Icon from "../../IconImages/React.png";
import Unity_Icon from "../../IconImages/Unity.png";
import ZSH_Icon from "../../IconImages/zsh.png";
import Python_Icon from "../../IconImages/python.png";
import Tensorflow_Icon from "../../IconImages/tensorflow.png";
import Rust_Icon from "../../IconImages/rust.png";
import C_Icon from "../../IconImages/c.png";

const IconRow = () => {
  var JavaScript = (
    <BaseIcon
      startX={0}
      startRotate={-60}
      endRotate={60}
      startScale={0.6}
      endScale={0.7}
      Icon={JavaScript_Icon}
    />
  );
  var Unity = (
    <BaseIcon
      startX={8}
      startRotate={-40}
      endRotate={40}
      startScale={0.7}
      endScale={0.8}
      Icon={Unity_Icon}
    />
  );
  var Java = (
    <BaseIcon
      startX={16}
      startRotate={60}
      endRotate={-60}
      startScale={0.9}
      endScale={1}
      Icon={Java_Icon}
    />
  );
  var zsh = (
    <BaseIcon
      startX={24}
      startRotate={40}
      endRotate={-100}
      startScale={0.7}
      endScale={0.8}
      Icon={ZSH_Icon}
    />
  );
  var CSS = (
    <BaseIcon
      startX={32}
      startRotate={-10}
      endRotate={100}
      startScale={0.6}
      endScale={0.75}
      Icon={CSS_Icon}
    />
  );
  var python = (
    <BaseIcon
      startX={40}
      startRotate={60}
      endRotate={-80}
      startScale={0.8}
      endScale={0.9}
      Icon={Python_Icon}
    />
  );
  var React = (
    <BaseIcon
      startX={48}
      startRotate={40}
      endRotate={-100}
      startScale={0.6}
      endScale={0.8}
      Icon={React_Icon}
    />
  );
  var tensorflow = (
    <BaseIcon
      startX={56}
      startRotate={-80}
      endRotate={60}
      startScale={0.7}
      endScale={0.8}
      Icon={Tensorflow_Icon}
    />
  );
  var CSharp = (
    <BaseIcon
      startX={64}
      startRotate={-50}
      endRotate={80}
      startScale={0.6}
      endScale={0.8}
      Icon={Csharp_Icon}
    />
  );
  var HTML = (
    <BaseIcon
      startX={72}
      startRotate={60}
      endRotate={-90}
      startScale={0.75}
      endScale={1}
      Icon={HTML_Icon}
    />
  );
  var Rust = (
    <BaseIcon
      startX={80}
      startRotate={-30}
      endRotate={50}
      startScale={0.75}
      endScale={1}
      Icon={Rust_Icon}
    />
  );
  var C = (
    <BaseIcon
      startX={88}
      startRotate={-30}
      endRotate={50}
      startScale={0.5}
      endScale={0.75}
      Icon={C_Icon}
    />
  );

  return (
    <div
      style={{
        marginTop: "5%",
        height: "45vh",
      }}
    >
      {Java}
      {JavaScript}
      {CSharp}
      {Unity}
      {CSS}
      {HTML}
      {React}
      {tensorflow}
      {zsh}
      {python}
      {Rust}
      {C}
    </div>
  );
};

export default IconRow;
