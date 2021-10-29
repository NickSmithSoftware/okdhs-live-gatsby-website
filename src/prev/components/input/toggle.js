import React, {useState} from 'react';


const Toggle = (props) => {
    const [on, toggle] = useState(false);

    return (
        <div className="form-check form-switch">
            <input type="checkbox" className="form-check-input" value={on} onChange={() => {
                toggle(!on);
                if (props.updateParent) {
                    props.updateParent(on);
                }
            }} />
        </div>
    )
}

export default Toggle;