import React from 'react';
import styles from './SideMenu.module.css'
import SideMenuEntry from './SideMenuEntry'

export default function SideMenu(props) {

    let getClassNames = function () {
        if (props.isHidden) {
            return styles.container + " " + styles.hidden;
        }
        return styles.container;
    }

    return (
        <div id="sidemenu" className={getClassNames()}>
            {
                props.entries.map(e =>
                    <SideMenuEntry text={e.text} link={e.link} />
                )
            }
        </div>
    );
}
