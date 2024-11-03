const BaseIcon = ({ Icon, Width }) => {
    return (
        <img
            style={{
                width: `${Width}%`,
                minWidth: `9vh`,
            }}
            src={Icon}
            alt="Icon"
        />
    );
};

export default BaseIcon;
