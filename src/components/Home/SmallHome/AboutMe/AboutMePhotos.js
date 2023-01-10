import BlueWater from '../../AboutMeImages/BlueWater.jpg';
import MeInCrevice from '../../AboutMeImages/MeInCrevice.jpg';
import MeOnBridge from '../../AboutMeImages/MeOnBridge.jpg';
import Sunset from '../../AboutMeImages/Sunset.jpg';

const AboutMePhotos = () => {
    return (
        <div style={{
            backgroundColor: 'red',
            width: '80%',
            marginLeft: '10%', 
            display: 'flex',
            flexWrap: 'wrap',
        }}>
            <img style={{
                width: '50%',
            }}
                src={MeOnBridge} alt="Bridge" />
            <img style={{
                width: '50%'
            }} src={BlueWater} alt="Blue Water" />
            <img style={{
                width: '50%'
            }} src={Sunset} alt="Sunset" />
            <img style={{
               width: '50%'
            }} src={MeInCrevice} alt="In Rocks" />
        </div>
    );
}

export default AboutMePhotos;
