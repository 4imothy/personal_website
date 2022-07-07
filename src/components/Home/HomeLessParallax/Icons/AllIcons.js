import BaseIcon from './BaseIcon.js';
import CSharp from './IconImages/CSharp.png';
import CSS from './IconImages/CSS.png';
import HTML from './IconImages/HTML.png';
import Java from './IconImages/Java.png';
import JavaScript from './IconImages/JavaScript.png';
import IconForReact from './IconImages/React.png';
import Unity from './IconImages/Unity.png';
import { Parallax } from 'react-scroll-parallax';

const AllIcons = () => {

    return (
        <>
            <Parallax style={{
                display: 'flex',
                justifyContent: 'center',
                height: '30vh'
            }} speed={10}>
                <BaseIcon Icon={Java} Width={100} />
                <BaseIcon Icon={JavaScript} Width={100} />
                <BaseIcon Icon={CSharp} Width={70} />
                <BaseIcon Icon={IconForReact} Width={80} />
                <BaseIcon Icon={CSS} Width={90} />
                <BaseIcon Icon={HTML} Width={100} />
                <BaseIcon Icon={Unity} Width={100} />
            </Parallax>
        </>

    );
}

export default AllIcons;