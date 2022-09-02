import styles from './style.module.scss';
import ghIcon from '../Images/githubIcon.png';
import ghHover from '../Images/githubIconHover.png';
import openAppIcon from '../Images/openApp.png';
import openAppHover from '../Images/openAppHover.png';

function Title() {
    return (
        <div className={styles.title}>
            <p>Sorting Visualizer</p>
        </div>
    );
}

function Text() {
    return (
        <div className={styles.text}>
            <p>
                This sorting visualizer is a tool to help anyone visualize the processes that take place
                in many popular algorithms. As of now the project contains four sorting algorithms,
                Merge Sort, Quick Sort, Heap Sort and Bubble Sort. This app was built using react. For
                each sort two arrays are created, the array that stores values and the visual array which
                turns those values into blocks with corresponding heights. I created this during the end of
                summer/beginning of school in fall 2022. You can access it to the left or open the website
                in a new window using the button below.
            </p>

            <a href="https://github.com/4tlc/sorting_visualizer" target="_blank" rel="noreferrer">
                <img className={styles.appIcon} src={ghIcon} alt={"See On GitHub"} onMouseOver={(e) => {
                    e.currentTarget.src = ghHover;
                }}
                    onMouseLeave={(e) => {
                        e.currentTarget.src = ghIcon;
                    }} />
            </a>
            <a href="https://4tlc.github.io/sorting_visualizer" target="_blank" rel="noreferrer">
                <img className={styles.icon} src={openAppIcon} alt={"See On GitHub"} onMouseOver={(e) => {
                    e.currentTarget.src = openAppHover;
                }}
                    onMouseLeave={(e) => {
                        e.currentTarget.src = openAppIcon;
                    }} />
            </a>
        </div>
    )
}

function Demo() {
    return (
        <div className={styles.demoContainer}>
            <iframe title="Sorting Visualizer Demo" className={styles.demo} width={500} height={500} src="https://4tlc.github.io/sorting_visualizer" />
        </div>
    );
}

const SmallPage = () => {
    return (
        <>
            <Title />
            <Text />
            <Demo />
        </>
    )
}

export default SmallPage;