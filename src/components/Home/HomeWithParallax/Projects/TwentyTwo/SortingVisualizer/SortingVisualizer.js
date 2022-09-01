import styles from './SorVisStyle.module.scss';
import iconImage from '../../ProjectIcons/SortingVisualizerIcon.png';
import {Link} from 'react-router-dom';

const SortingVisualizer = () =>{ 
    return ( 
	<Link to='/SortingVisualizer'>
	    <img className={styles.icon} src={iconImage}/>
	    <div className={styles.textContainer}>
		<h1 className={styles.text}>Sorting <br/> Visualizer</h1>
	    </div>
	</Link>
    );
}

export default SortingVisualizer;
