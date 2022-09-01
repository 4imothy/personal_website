import HomeWithParallax from './HomeWithParallax/HomeWithParallax.js'
import HomeLessParallax from './HomeLessParallax/HomeLessParallax.js';
import ContactForm from './ContactMe/ContactForm.js';
import { useState, useEffect } from 'react';

const Home = () => {

    useEffect(() => {
        document.title = "Timothy Cronin";
        document.body.setAttribute('style', 'background: #edeaea; overflow-x: hidden; position: relative');
    })
    const [currentHome, setCurrentHome] = useState();
    const [wasSmallened, setWasSmalled] = useState(false);
    const [isFirst, setIsFirst] = useState(true);

    const windowSize = UpdateHomeFromSize();

    if (!wasSmallened && (windowSize.width < 802 || windowSize.height < 520 || windowSize.widthToHeight < 1.2)) {
        console.log("setting to small");
        setWasSmalled(true);
        setCurrentHome(< HomeLessParallax />);
    }
    if ((isFirst || wasSmallened) && windowSize.width >= 802 && windowSize.height >= 520 && windowSize.widthToHeight >= 1.2) {
        console.log("setting to large");
        setCurrentHome(< HomeWithParallax />);
        setWasSmalled(false);
        setIsFirst(false);
    }




    return (
        <div    >
            <div id="home">
                {currentHome}
            </div>
            <ContactForm />
        </div>
    );
}



function UpdateHomeFromSize() {

    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
        widthToHeight: undefined,
    });

    useEffect(() => {
        // Handler to call on window resize
        function handleResize() {
            // Set window width/height to state
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
                widthToHeight: (parseInt(window.innerWidth) / parseInt(window.innerHeight)),
            });
            console.log("setting the values");
        }
        // Add event listener
        window.addEventListener("resize", handleResize);
        // Call handler right away so state gets updated with initial window size
        handleResize();
        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
}

export default Home;
