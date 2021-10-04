import React, {useState, useEffect} from 'react';

const IconSwitch = (props) => {
    const [toggled, setToggled] = useState(false);
    const [icon, setIconClass] = useState(props.iconClass);

    useEffect(() => {
        setIconClass(toggled ? props.iconClass : props.iconAltClass);
        console.log(icon)
    }, [toggled])

    return (
        <button className={`p-2 icon-switch btn btn-link rounded-circle d-flex align-middle`} style={{

            width: "2rem",
            height: "2rem",
            border: 0

        }} onClick={() => {

            props.onClick(!toggled);
            setToggled(!toggled);
            console.log("CLICK");

        }}>
            <div className={`icon icon-${icon} align-self-center`} />
        </button>
    )
}

export default IconSwitch;