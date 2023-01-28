import BaseIcon from './BaseIcon.js';
import CSharp_Icon from '../../IconImages/CSharp.png';
import CSS_Icon from '../../IconImages/CSS.png';
import HTML_Icon from '../../IconImages/HTML.png';
import Java_Icon from '../../IconImages/Java.png';
import JavaScript_Icon from '../../IconImages/JavaScript.png';
import React_Icon from '../../IconImages/React.png';
import Unity_Icon from '../../IconImages/Unity.png';
import ZSH_Icon from '../../IconImages/zsh.png';
import Python_Icon from '../../IconImages/python.png';
import Tensorflow_Icon from '../../IconImages/tensorflow.png';
import Rust_Icon from '../../IconImages/rust.png';
import { Parallax } from 'react-scroll-parallax';

const AllIcons = () => {

    return (
        <>
            <Parallax style={{
                position: 'relative',
                justifyContent: 'center',
                alignItems: 'center',
                flexWrap: 'wrap',
                height: '30vh',
                width: '100%',
                display:"flex",
            }} speed={10}>
                <BaseIcon Icon={JavaScript_Icon} Width={8} />
                <BaseIcon Icon={Unity_Icon} Width={8} />
                <BaseIcon Icon={Java_Icon} Width={8} />
                <BaseIcon Icon={ZSH_Icon} Width={8} />
                <BaseIcon Icon={CSS_Icon} Width={8} />
                <BaseIcon Icon={Python_Icon} Width={8} />
                <BaseIcon Icon={React_Icon} Width={8} />
                <BaseIcon Icon={Tensorflow_Icon} Width={8} />
                <BaseIcon Icon={CSharp_Icon} Width={8} />
                <BaseIcon Icon={HTML_Icon} Width={8} />
                <BaseIcon Icon={Rust_Icon} Width={8} />
            </Parallax>
        </>

    );
}

export default AllIcons;