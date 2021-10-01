import React, {useState} from 'react';

import '../../style/toggle.css';

const Toggle = (props) => {
    const [on, toggle] = useState(false);

    return (
        <label className="switch">
            <input type="checkbox" value={on} onChange={() => {
                toggle(!on);
                if (props.updateParent) {
                    props.updateParent(on);
                }
            }} />
            <span className="slider round"></span>
        </label>
    )
}

export default Toggle;