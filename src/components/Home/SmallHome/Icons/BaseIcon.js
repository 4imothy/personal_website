 const BaseIcon = ({Icon, Width}) => {
    return (
        <img style={{
            width: `${Width}%`,
        }} src={Icon} alt="Icon"/>
    );
}

export default BaseIcon;