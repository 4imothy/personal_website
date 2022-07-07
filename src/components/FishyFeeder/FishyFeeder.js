import FishyFeederBigScreen from './ForBigScreen/FishyFeederBigScreen.js'
import FishyFeederForSmallScreen from './ForSmallScreen/FishyFeederForSmallScreen.js'
import { useState, useEffect } from 'react';

const FishyFeeder = () => {

    useEffect(() => {
        document.title = "Fishy Feeder";
        document.body.setAttribute('style', 'background: url("https://res.cloudinary.com/dmr8ozkfj/image/upload/v1657139856/FishyFederBackground.jpg") no-repeat center center fixed;'
            + '  -webkit-background-size: cover;'
            + '-moz-background-size: cover;'
            + '-o-background-size: cover;'
            + 'background-size: cover'
        );
    })

    const [currentPage, setCurrentPage] = useState();
    const [wasSmallened, setWasSmalled] = useState(false);
    const [isFirst, setIsFirst] = useState(true);

    const windowSize = UpdateHomeFromSize();

    if (!wasSmallened && (windowSize.width < 802 || windowSize.height < 520 || windowSize.widthToHeight < 1.2)) {
        console.log("setting to small");
        setWasSmalled(true);
        setCurrentPage(< FishyFeederForSmallScreen />);
    }
    if ((isFirst || wasSmallened) && windowSize.width >= 802 && windowSize.height >= 520 && windowSize.widthToHeight >= 1.2) {
        console.log("setting to large");
        setCurrentPage(< FishyFeederBigScreen />);
        setWasSmalled(false);
        setIsFirst(false);
    }




    return (
        <div>
            {currentPage}
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

export default FishyFeeder;