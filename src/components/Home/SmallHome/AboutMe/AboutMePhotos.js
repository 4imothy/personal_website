import asheville from '../../AboutMeImages/asheville.jpeg';
import fish from '../../AboutMeImages/fish.jpeg';
import frisbee from '../../AboutMeImages/frisbee.jpeg';
import tennis from '../../AboutMeImages/tennis.jpeg';

const AboutMePhotos = () => {
    return (
        <div
            style={{
                width: '80%',
                marginLeft: '10%',
                display: 'flex',
                flexWrap: 'wrap',
            }}
        >
            <img
                style={{
                    width: '50%',
                }}
                src={asheville}
                alt="Bridge"
            />
            <img
                style={{
                    width: '50%',
                }}
                src={frisbee}
                alt="Blue Water"
            />
            <img
                style={{
                    width: '50%',
                }}
                src={tennis}
                alt="Sunset"
            />
            <img
                style={{
                    width: '50%',
                }}
                src={fish}
                alt="In Rocks"
            />
        </div>
    );
};

export default AboutMePhotos;
