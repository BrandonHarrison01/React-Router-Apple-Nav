import React from 'react';

function NavWrapper (props) {
    return(
        <nav>
            {props.tabs.map(tab => <a key={tab} >{tab}</a>)}
        </nav>
    )
}

export default NavWrapper;