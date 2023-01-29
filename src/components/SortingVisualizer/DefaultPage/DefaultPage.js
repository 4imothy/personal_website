import styles from './style.module.scss';
import ghIcon from '../../SharedIcons/githubIcon.png';
import ghHover from '../../SharedIcons/githubIconHover.png';
import openAppIcon from '../Images/openApp.png';
import openAppHover from '../Images/openAppHover.png';

const Title = () => {
    return (
        <div className={styles.titleContainer}>
            <h1>Sorting Visualizer</h1>
        </div>
    )
}

const Content = () => {
    return (
        <>
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
                    <img className={styles.icon} src={ghIcon} alt={"See On GitHub"} onMouseOver={(e) => {
                        e.currentTarget.src = ghHover;
                    }}
                        onMouseLeave={(e) => {
                            e.currentTarget.src = ghIcon;
                        }} style={{
                            left: '0%'
                        }}/>
                </a>

                <a href="https://4tlc.github.io/sorting_visualizer" target="_blank" rel="noreferrer">
                    <img className={styles.icon} src={openAppIcon} alt={"See On GitHub"} onMouseOver={(e) => {
                        e.currentTarget.src = openAppHover;
                    }}
                        onMouseLeave={(e) => {
                            e.currentTarget.src = openAppIcon;
                        }} style={{
                            left: '12%'
                        }} />
                </a>
            </div>
            <iframe title="Sorting Visualizer" className={styles.frame} width={400} height={500} src="https://4tlc.github.io/sorting_visualizer" />
        </>
    );
}

const DefaultPage = () => {

    return (
        <div>
            <Title />
            <Content />
        </div>
    )
}

export default DefaultPage;